import { heading, styled } from '@panda-nx-next-storybook/styled-system';

const Heading = styled('h1', heading);

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <Heading size="large" color="heavy">
        I am large
      </Heading>
      <Heading size="small" color="light">
        I am small
      </Heading>
    </>
  );
}
