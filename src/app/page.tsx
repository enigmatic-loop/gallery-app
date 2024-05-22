import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/9e19f97d-80c0-45da-9fbd-4672b9e56900-1xd7fn.JPG",
  "https://utfs.io/f/bef50eb6-50ef-4951-ba6e-899a9ca77352-1xd7fm.JPG",
  "https://utfs.io/f/f5adc866-02bb-4527-9952-53394d48d2c5-1xd6ow.JPG",
  "https://utfs.io/f/c3a53ac8-b94c-49d6-821a-db020a300ef9-1xd7fh.JPG"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className=" w-44">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
