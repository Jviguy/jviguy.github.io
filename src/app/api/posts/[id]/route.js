import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Post from "@/models/Post";

export const GET = async (req, {params}) => {
    try {
        await connect();
        const posts = await Post.findById(params.id);
        console.log(JSON.stringify(posts));
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}