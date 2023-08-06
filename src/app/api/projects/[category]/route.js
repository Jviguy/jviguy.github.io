import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Project from "@/models/Project";

export const GET = async (req, {params}) => {
    try {
        await connect();
        const posts = await Project.find({type: params.category});
        console.log("POSTS: " + posts);
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}