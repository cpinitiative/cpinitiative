import { MDXRemote } from "next-mdx-remote";

export default function Announcement({announcement}){
    return (
        <div className="prose-a:text-blue-800 prose-a:visited:text-purple-600">
            <MDXRemote {...announcement}>
            </MDXRemote>
        </div>
    )
}