import React from "react";

export default function AuthorCard({ author }) {
  return (
    <div>
      <img
        src={
          "https:" +
          author.avatar.file.url +
          "?fit=thumb&f=top_left&h=200&w=200&r=180"
        }
      />
      <h2>{author.name}</h2>
      <p>{author.description}</p>
    </div>
  );
}
