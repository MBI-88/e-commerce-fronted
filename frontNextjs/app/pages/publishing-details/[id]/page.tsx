// import Image from "next/image";
import React from "react";
import getData from "./services/service-getPublishing";
import DetailsItem from "./components/DetailsItem";




//!metadata
export async function generateMetadata({
  params: { id },
}: {
  params: { id: number };
}) {
  const { publishing } = await getData(id);

  return {
    title: publishing.product_name,
    description: publishing.description,
  };
}





//!componente
async function PublishingDetails({
  params: { id },
}: {
  params: { id: number };
}) {
  const { publishing } = await getData(id);

  console.log(publishing);

  return (
    <DetailsItem {...publishing}/>
  );
}

export default PublishingDetails;
