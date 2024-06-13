import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {

  const theme = request.cookies.get("theme"); // get cookie from request
  console.log(theme);

//   cookies().set("resultPerPage", "20"); // set cookie in response using cookies helper
//   console.log(cookies().get("resultPerPage")); // get cookie from response

  return new Response("<h1>Check the console</h1>", {
    headers: {
        "Set-Cookie": "theme=light;" // set a cookie and response to client
    },
  });
}
