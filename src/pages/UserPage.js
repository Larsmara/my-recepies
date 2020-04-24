import React from "react";
import { Layout } from "../components";

const UserPage = () => {
  return (
    <Layout>
      <button className='btn'>Regular Button</button>

      <button className='btn btn-block my-1'>Block Button</button>

      <button className='btn btn-text'>Text Button</button>

      <button className='btn btn-error my-1'>Error</button>

      <button className='btn btn-secondary'>Secondary</button>

      <button className='btn btn-success my-1'>success</button>

      <button className='btn btn-warning my-1'>Warning</button>

      <button className='btn btn-info my-1'>Warning</button>
    </Layout>
  );
};

export default UserPage;
