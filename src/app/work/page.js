// app/work/page.js — the portfolio now lives at /, but this route is
// on resumes and applications already out in the world, so it stays
// alive as a redirect instead of 404ing.
import { redirect } from "next/navigation";

export default function WorkPage() {
  redirect("/");
}
