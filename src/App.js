// import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
// import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import "./App.css";
import { store } from "./redux/store";
import "aos/dist/aos.css";
import "@fontsource/inter";
import "@fontsource/poppins";

// builder.init("5f7cdbedb3ab47688fdb0e639027545e");

function App() {
  // set whether you're using the Visual Editor,
  // whether there are changes,
  // and render the content if found
  // const isPreviewingInBuilder = useIsPreviewing();
  // const [notFound, setNotFound] = useState(false);
  // const [content, setContent] = useState(null);
  const pages = useRoutes(AppRoutes);
  // // get the page content from Builder
  // useEffect(() => {
  //   async function fetchContent() {
  //     const content = await builder
  //       .get("page", {
  //         url: window.location.pathname,
  //       })
  //       .promise();

  //     //dynamically renders tab title from builder.io page field
  //     document.title = content.data.title;

  //     setContent(content);
  //     setNotFound(!content);
  //   }
  //   fetchContent();
  // }, []);

  // // if no page is found, return a 404 page
  // if (notFound && !isPreviewingInBuilder) {
  //   return <div>Not Found 404 Error</div>;
  // }

  return <Provider store={store}>{pages}</Provider>;
  // return (
  //   <>
  //     {/* Render the Builder page */}
  //     <BuilderComponent model="page" content={content} />
  //   </>
  // );
}

export default App;
