import Layout from '@/components/layout';

const Test = () => {
    return (
        <div>
            <h1>Hi i'm Testing</h1>
        </div>
    );
};

export default Test;

Test.getLayout = function getLayout(page) {
    return (

        <Layout>{page}</Layout>

    )
}