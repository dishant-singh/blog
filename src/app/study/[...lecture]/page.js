"use client";
export default function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Day of college {params.lecture[0]}</h1>
      <h1>Lecture No. {params.lecture[1]}</h1>
      <h1>Video no. {params.lecture[2]}</h1>
    </div>
  );
}
