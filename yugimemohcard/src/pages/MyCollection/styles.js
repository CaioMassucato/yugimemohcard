import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 0rem;
  max-width: 100vw;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const SearchBar = styled.img`
  height: 3rem;
  width: 25rem;
`

export const Collections = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const Review = styled.button`
  display: flex;
`

export const Options = styled.div`
  display: flex;
  height: 20vh;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Select = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  justify-content: space-between;
`

export const CardDiv = styled.div`
  display: flex;
`