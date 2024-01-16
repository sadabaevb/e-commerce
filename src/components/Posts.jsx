import Post from "@/components/Post";

const Posts = () => {
  return (
    <section className="md:tw-px-48">
      <div className="tw-flex tw-gap-x-2.5">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Posts;
