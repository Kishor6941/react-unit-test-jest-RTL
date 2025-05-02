What to test?
  1) Test component renders
  2) Test component renders with props
  3) Test component renders in different states
  4) Test component reacts to events

What not to test?
  1) Implmentation details
  2) Third party code
  3) Code that is not implement from a user point of view    

 RTL Queries
  Every test we write generally involves the following basic steps
  1) Render the component
  2) Find an element rendered by the component
  3) Assert against the element found in step 2 which will pass or fail the test.


  - To render the component, we use the render method from RTL

  - For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom.


  - Queries are the methods that Testing Library provides to find elements on the page.
   To find a single element on the page, we have
      - getBy..
      - queryBy..
      - findBy..
   To find multiple elements on the page, we have
      - getAllBy..
      - queryAllBy..
      - findAllBy..
       .. is the suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId


  - getBy.. queries

    - getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found 

  - getByRole

     - getByRole queries for elements with the given role
     - Role refers to the ARIA (Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assitive technologies are able to use them.
     - By default,many semantic elements in HTML have a role
     - Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role and so on

     - if you're working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role

     - To use an anchor element as a button in the navbar, you can add role="button"               

        getByRole Options
          name
          level
          hidden
          selected
          checked
          pressed

- getByLabelText   
    -  getByLabelText will search for the label that matches the given text, then find the element associated with that label   

- getByPlaceholderText
    - getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text

- getByText
    - getByText will search for all elements that have a text node with textContent matching the give text

    Typically, you'd use this to find paragraph, div or span elements

- getByDisplayValue
   - getByDisplayValue returns the input, textarea, or select element that has the matching display value 

- getByAltText
    - getByAltText will return the element that has the given alt text
    - This method only supports elements which accept an alt attribute like <img>,<input>,<area> or custom HTML elements

- getByTitle
     - getByTitle returns the element that has the matching title attribute

- getByTestId
     - getByTestId returns the element that has the matching data-testid attribute

     Priority Order for Queries
      1) getByRole
      2) getByLabelText
      3) getByPlaceholderText
      4) getByText
      5) getByDisplayValue
      6) getByAltText
      7) getByTitle
      8) getByTestId

- RTL getAllBy Queries
  - find multiple elements in the DOM
  - getAllBy returns an array of all matching nodes for a query, and throws an error if no elements match
      1) getAllByRole
      2) getAllByLabelText
      3) getAllByPlaceholderText
      4) getAllByText
      5) getAllByDisplayValue
      6) getAllByAltText
      7) getAllByTitle
      8) getAllByTestId

- getAllByRole


- queryBy and queryAllBy
- queryBy
- Returns the matching node for a query, and return null if no elements match
- Useful for asserting an element that is not present
- Throws an error if more than one match is found

queryAllBy
- Returns an array of all matching nodes for a query, and return an empty array if no elements match

      1) queryByRole
      2) queryByLabelText
      3) queryByPlaceholderText
      4) queryByText
      5) queryByDisplayValue
      6) queryByAltText
      7) queryByTitle
      8) queryByTestId

       1) queryAllByRole
      2) queryAllByLabelText
      3) queryAllByPlaceholderText
      4) queryAllByText
      5) queryAllByDisplayValue
      6) queryAllByAltText
      7) queryAllByTitle
      8) queryAllByTestId

Queries so far
- getBy and getAllBy of queries to assert if elements are present in the DOM
- queryBy and queryAllBy class of queries to assert if elements are not present in the DOM

- What if elements are not present in the DOM to begin but make their way into the DOM after some time?
- For example, data that is fetched from a server will be rendered only after a few milliseconds

- findBy and findAllBy
- findBy
 - Returns a Promise which resolves when an element is found which matches the given query.
 - The Promise is rejected if no elements is found or if more than one element is found after a default timeout of 1000ms

 - findAllBy
- Returns a promise which resolves to an array of elements when any elements are found which match the given query
- The promise is rejected if no elements are found after a default timeout of 1000ms