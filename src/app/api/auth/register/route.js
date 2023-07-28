import connect from "@/utils/db";
import Post from "@/models/Post";
import {NextResponse} from "next/server";

export const GET = async (req) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}