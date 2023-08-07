import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Project from "@/models/Project";

export const GET = async (req, {params}) => {
    try {
        await connect();
        const project = await Project.findOne({type: params.category, name: params.name});
        return new NextResponse(JSON.stringify(project), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}