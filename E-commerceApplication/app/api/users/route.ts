import { createClient } from "@/utils/supabase/client";
import { NextResponse, NextRequest } from "next/server";

const supabase = createClient();

export const GET = async (request: NextRequest) => {
    try {
        const { data: users, error } = await supabase.from("users").select("*");
        if (error) {
            console.error("Error fetching users:", error.message);
            return NextResponse.json(
                { message: "Failed to fetch users", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "Users fetched successfully", users },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error fetching users:", error.message);
        return NextResponse.json(
            { message: "Failed to fetch users", error: error.message },
            { status: 500 }
        );
    }
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { name, address, email, password } = await request.json();
        const { data: user, error } = await supabase.from("users").insert([{ name, address, email, password }]);
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

export const PUT = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { id, name, address, email, password } = await request.json();
        const { data: user, error } = await supabase.from("users").update({ name, address, email, password }).eq('id', id);
        if (error) {
            console.error("Error updating user:", error.message);
            return NextResponse.json(
                { message: "Failed to update user", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "User updated successfully", user },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error updating user:", error.message);
        return NextResponse.json(
            { message: "Failed to update user", error: error.message },
            { status: 500 }
        );
    }
};

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { id } = await request.json();
        const { error } = await supabase.from("users").delete().eq('id', id);
        if (error) {
            console.error("Error deleting user:", error.message);
            return NextResponse.json(
                { message: "Failed to delete user", error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: "User deleted successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error deleting user:", error.message);
        return NextResponse.json(
            { message: "Failed to delete user", error: error.message },
            { status: 500 }
        );
    }
};