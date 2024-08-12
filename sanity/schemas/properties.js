export default {
  name: "properties",
  title: "Properties",
  type: "document",
  fields: [
    {
      name: "metatitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "propertyName",
      title: "Property Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "propertyName",
        maxLength: 96,
      },
    },
    {
      name: "reraNumber",
      title: "Rera Number",
      type: "string",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "startingPrice",
      title: "Starting Price",
      type: "string",
    },
    {
      name: "apartmentSizes",
      title: "Apartment Sizes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "size",
              title: "Size",
              type: "string",
            },
            {
              name: "area",
              title: "Area",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "aboutProperty",
      title: "About Property",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
    {
      name: "video",
      title: "Video link",
      type: "string",
    },
    {
      name: "brochure",
      title: "Brochure link",
      type: "string",
    },
    {
      name: "mapLink",
      title: "Map link",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "nearbyLocation",
      title: "Nearby Locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "location",
              title: "Location",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "Swimming Pool", value: "swimmingPool" },
          { title: "Fitness Center", value: "fitnessCenter" },
          { title: "Toddler Play Area", value: "toddlerPlayArea" },
          { title: "Multi-Purpose Hall", value: "multipurposeHall" },
          { title: "Grand Entrance lobby", value: "grandEntranceLobby" },
          { title: "Home Automation", value: "homeAutomation" },
          { title: "CCTV Surveillance", value: "cctvSurveillance" },
          { title: "High Speed Elevators", value: "highSpeedElevators" },
          { title: "Yoga Room", value: "yogaRoom" },
          { title: "Access Control Lobby", value: "accessLobby" },
        ],
        layout: "list",
      },
    },
    {
      name: "floorPlans",
      title: "Floor Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "floor",
              title: "Floor",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
  ],
};
