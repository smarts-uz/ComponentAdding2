import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Gallery/ImageSlider")),
  {
    name: "ImageSlider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/PhotoAlbum/PhotoAlbum")),
  {
    name: "Album",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Hello/HelloWorld")),
  {
    name: "HelloWorld",
  }
);
