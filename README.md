# posting-site

A publishing site written in React. Allows you to search, browse, sort and filter posts. There is authentication before viewing posts. The site is implemented using various aspects of React programming.

Authentication and navigation between pages is implemented using React Router. An unauthenticated user cannot view posts because only the login page is available. All pages except login are available for authenticated users. There is a button on the top right to exit.

Posts are uploaded from the site's remote API: https://jsonplaceholder.typicode.com/. We have the opportunity to view the post by its id and its comments.

There are also visual transitions created using the React Transition Group.

We can sort posts on the current page by title or description. We can increase the number of posts on one page to 5, 10, 25 or all. The search is carried out by keywords.

Own custom UI objects are created. All components are destructured by jsx files.
