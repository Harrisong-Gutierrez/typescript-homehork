import { createClient } from "@/utils/supabase/client";
import { NextResponse, NextRequest } from "next/server";

const supabase = createClient();


export const GET = async (request: NextRequest) => {
    try {
        const { data: carts, error } = await supabase.from("shopping_carts").select("*");
        if (error) {
            console.error("Error fetching carts:", error.message);
            return NextResponse.json(
                { message: "Failed to fetch carts", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Carts fetched successfully", carts },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error fetching carts:", error.message);
        return NextResponse.json(
            { message: "Failed to fetch carts", error: error.message },
            { status: 500 }
        );
    }
};


export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { id, user_id, creation_date } = await request.json();
        const { data: user, error } = await supabase.from("shopping_carts").insert([{ id, user_id, creation_date }]);
        if (error) {
            console.error("Error adding user:", error.message);
            return NextResponse.json(
                { message: "Failed to add user", error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "User added successfully", user },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error adding user:", error.message);
        return NextResponse.json(
            { message: "Failed to add user", error: error.message },
            { status: 500 }
        );
    }
};