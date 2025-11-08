import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export async function verifyUser() {
  const accessToken = await cookies().get("accessToken")?.value;
  const refreshToken = await cookies().get("refreshToken")?.value;

  // check access token 
  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.AUTH_SECRET);
      return { id: decoded.id };
    } catch (err) {
      console.log("Access token expired or invalid");
    }
  }

  // check refresh token 
  if (refreshToken) {
    try {
      const decodedRefresh = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

      // Generate new access token
      const newAccessToken = jwt.sign(
        { id: decodedRefresh.id },
        process.env.AUTH_SECRET,
        { expiresIn: "15m" }
      );
      cookies().set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60,
      });

      // Extend refresh token if near expiry (less than 1 day left)
      const timeLeft = decodedRefresh.exp * 1000 - Date.now();
      if (timeLeft < 24 * 60 * 60 * 1000) { // 1 day
        const newRefreshToken = jwt.sign(
          { id: decodedRefresh.id },
          process.env.REFRESH_SECRET,
          { expiresIn: "15d" }
        );
        cookies().set("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 15 * 24 * 60 * 60,
        });
      }

      return { id: decodedRefresh.id };
    } catch (err) {
      console.log("Refresh token expired → clearing cookies");
      cookies().set("accessToken", "", { expires: new Date(0), path: "/" });
      cookies().set("refreshToken", "", { expires: new Date(0), path: "/" });
      return null;
    }
  }

  return null;
}
