const data = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Custom responsive websites and web applications built using modern frameworks.",
    price: 1200,
    currency: "USD",
    duration: "4 weeks",
    category: "Development",
    isActive: true,
  },
  {
    id: 2,
    name: "SEO Optimization",
    description:
      "Improve your website ranking with keyword optimization, backlinking, and site audits.",
    price: 350,
    currency: "USD",
    duration: "2 weeks",
    category: "Marketing",
    isActive: true,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description:
      "Intuitive and modern designs tailored to your brand identity.",
    price: 800,
    currency: "USD",
    duration: "3 weeks",
    category: "Design",
    isActive: true,
  },
  {
    id: 4,
    name: "Social Media Management",
    description:
      "Full-service social media handling, content creation, and engagement strategy.",
    price: 500,
    currency: "USD",
    duration: "1 month",
    category: "Marketing",
    isActive: false,
  },
  {
    id: 5,
    name: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    price: 2500,
    currency: "USD",
    duration: "8 weeks",
    category: "Development",
    isActive: true,
  },
];

export default async function ServiceDetailsPage({ params }) {
  const id = await params.id;
  const singleData = data.find((d) => d.id == id);
  // console.log(singleData);
  if(singleData) {
  return (
    <>
      <h1>ServiceDetailsPage : {id}</h1>
      {/* <h2> {singleData.name} </h2> */}
      {/* <p> {singleData.description}</p> */}
    </>
  );    
  }
  else {
    return <p>Not found page</p>
  }

}
