import { http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";

const Posts = [];
const delay = (ms: number) => new Promise((res) => {
    setTimeout(res, ms);
});

export const handlers = [
    http.get("/api/food?category", ({ request,params }) => {
        const url = new URL(request.url);
        const category = url.searchParams.get("category");
        const order = url.searchParams.get("order");
        if(order==='new') {
            return HttpResponse.json(
                [
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    }

                ],{status:200}
            )
        }  else if(order==='recommend') {
            return HttpResponse.json(
                [
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    }

                ],{status:200}
            )
        }
        else if(order==='view') {
            return HttpResponse.json(
                [
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.urlLoremFlickr({ category: 'food' }),
                        createdAt: faker.date.anytime()
                    }

                ],{status:200}
            )
        }
        else if(category==='/home') {
          return HttpResponse.json(
              [
                {
                  postId: 1,
                  User: faker.person.fullName(),
                  title: faker.person.fullName(),
                  Images: faker.image.urlLoremFlickr({ category: 'food' }),
                  createdAt: faker.date.anytime()
                },

              ],{status:200}
          )
        }

        else if(category==='/main') {
            return HttpResponse.json(
                [
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.url(),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.url(),
                        createdAt: faker.date.anytime()
                    },
                    {
                        postId: 1,
                        User: faker.person.fullName(),
                        title: faker.person.fullName(),
                        Images: faker.image.url(),
                        createdAt: faker.date.anytime()
                    },

                ]
            );
        }
    }),
    // http.get("/api/food?category=/meat", ({ request }) => {
    //     const url = new URL(request.url);
    //     return HttpResponse.json(
    //         [
    //             {
    //                 postId: 1,
    //                 User: faker.person.fullName(),
    //                 title: faker.person.fullName(),
    //                 Images: faker.image.url(),
    //                 createdAt: faker.date.anytime()
    //             },
    //         ]
    //     );
    // })
];
