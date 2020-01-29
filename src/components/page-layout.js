import NewsletterForm from './newsletter-form';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {IconSearch} from '@apollo/space-kit/icons/IconSearch';
import {Layout} from 'gatsby-theme-apollo-core';
import {TextField} from '@apollo/space-kit/TextField';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1220,
  minHeight: '100vh',
  margin: '0 auto',
  padding: '0 40px'
});

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 0',
  backgroundColor: 'white',
  position: 'sticky',
  top: 0
});

const SearchInput = styled(TextField)({
  flexGrow: 1,
  marginLeft: 64
});

const InnerWrapper = styled.div({
  display: 'flex',
  flexGrow: 1
});

const Main = styled.main({
  flexGrow: 1
});

const Sidebar = styled.aside({
  width: 200,
  flexShrink: 0
});

export default function PageLayout(props) {
  return (
    <Layout>
      <Wrapper>
        <Header>
          Logo
          <SearchInput
            size="large"
            placeholder="Search blog..."
            icon={
              <IconSearch
                style={{
                  height: 14,
                  width: 14
                }}
              />
            }
          />
        </Header>
        <InnerWrapper>
          <Main>{props.children}</Main>
          <Sidebar>
            <NewsletterForm />
          </Sidebar>
        </InnerWrapper>
      </Wrapper>
    </Layout>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};
