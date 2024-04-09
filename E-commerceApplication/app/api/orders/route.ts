import { createClient } from "@/utils/supabase/client";
import { NextResponse, NextRequest } from "next/server";

const supabase = createClient();

export const GET = async (request: NextRequest) => {
    try {
        const { data: orders, error } = await supabase.from("orders").select("*");
        if (error) {
            console.error("Error fetching orders:", error.message);
            return NextResponse.json(
                { message: "Failed to fetch orders", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Orders fetched successfully", orders },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error fetching orders:", error.message);
        return NextResponse.json(
            { message: "Failed to fetch orders", error: error.message },
            { status: 500 }
        );
    }
};


