import React from 'react'

const FeaturedProducts = () => {

  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    setStatus("fetching");
    fetch("https://strapi-death-wish-coffee-backend.onrender.com/api/coffees/?populate=main_image")
      .then((res) => res.json())
      .then((data) => {
        setStatus("done");
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  return (
    <div>
      {data.map((coffees) => (
        <div>
          {coffees.attributes}
        </div>
      ))}
      
    </div>
  )
}

export default FeaturedProducts
