import { Orders } from "@/features/order";
import { AllOrdersQuery } from "@/generated/AllOrdersQuery";
import { ALL_ORDERS_QUERY } from "@/graphql/index";
import { addApolloState, initializeApollo } from "@/lib/index";
import { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";

const OrdersPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoppy | Orders </title>
      </Head>
      <Orders />
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({ headers: context?.req?.headers });
  try {
    await client.query<AllOrdersQuery>({
      query: ALL_ORDERS_QUERY,
      context: { headers: { "Cookie": context?.req?.headers?.cookie } },
    });

    return addApolloState(client, {
      props: {},
    });
  } catch {
    if (context?.req?.headers?.cookie) {
      return {
        props: {},
      };
    }
    return {
      props: {},
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
};

export default OrdersPage;
