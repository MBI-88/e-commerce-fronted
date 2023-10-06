import Item from "@/app/pages/home/components/populars_category/components/Item";
import React from "react";
import getData from "../../services/service-getPublishings";

async function Publishings() {
  const { publishings } = await getData();

  console.log(publishings);

  return (
    <div className="p-2 mx-auto my-12 flex  flex-wrap justify-center md:justify-start gap-4  ">
      {publishings &&
        publishings.map((item: any) => (
          <Item key={item.publishing_id} {...item} />
        ))}
    </div>
  );
}

export default Publishings;
