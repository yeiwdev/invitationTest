import { redirect } from "next/navigation"

export default function Default() {
  redirect("/invitation/?r=4")
}
