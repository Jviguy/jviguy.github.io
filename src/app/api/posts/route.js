import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Post from "@/models/Post";

export const GET = async (req) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}