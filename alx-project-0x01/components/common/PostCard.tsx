import React from "react";

type PostCardProps = {
  title: string;
  description: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;
