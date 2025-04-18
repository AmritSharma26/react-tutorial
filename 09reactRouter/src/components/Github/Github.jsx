import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [username, setusername] = useState("hiteshchoudhary");

    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${username}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setdata(data);
    //             console.log(data);
    //         });
    // }, []);

    const data = useLoaderData();
    // console.log(data);

    return (
        <div
            className="flex flex-col
w-full h-[100vh] bg-gradient-to-tl from-violet-400 to-blue-300 items-center justify-center"
        >
            <h1 className=" text-5xl font-bold">Github</h1>
            <div
                id="container"
                className="flex items-center justify-evenly bg-white rounded-2xl p-4 m-4"
            >
                <img
                    src={data.avatar_url}
                    alt="Profile Image"
                    className="h-35 rounded-lg"
                />
                <p className="m-4 p-4 text-3xl font-semibold">{data.name}</p>
            </div>
        </div>
    );
}

export default Github;
export const githubInfoLoader = async ({ params }) => {
    const username = "hiteshchoudhary";
    const response = await fetch(`https://api.github.com/users/${username}`);
    // console.log(response.json);
    return response.json();
};
