export default {
  name: "home",
  title: "Home",
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
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "heroSlider",
      title: "Hero Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
      name: "sectionHead",
      title: "Section Headline",
      type: "string",
    },
    {
      name: "sectionDesc",
      title: "Section Description",
      type: "string",
    },
    {
      name: "whyRed",
      title: "Why Red Properties",
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
      name: "services",
      title: "Services",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "name",
              type: "string",
            },
            {
              name: "review",
              title: "Review",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
