import connect from "@/utils/db";
import {NextResponse} from "next/server";
import User from "@/models/User";
import {hash} from "bcrypt";

export const POST = async (req) => {
    const {name, email, password} = await req.json();
    const h = await hash(password, 10);
    const newUser = new User({name, email, password: h});
    try {
        await connect();
        await newUser.save();
        return new NextResponse("", {status: 201});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}