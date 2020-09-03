import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./Hello";

let container;

beforeEach(()=> {
	container = document.createElement("div");
	document.body.appendChild(container);
	
});

afterEach(()=> {
	unmountComponentAtNode(container);
	container.remove();
	container=null;
});

it("renders with or with out name",() => {
	
	act(()=>{
	   render(<Hello />,container);
	});
	
	expect(container.textContent).toBe("unknown name");
	act(()=>{
	   render(<Hello name="suboor" />,container);
	});
	expect(container.textContent).toBe("Hello my name is suboor");
	act(()=>{
	  render(<Hello name="Husna" />,container);
	});
	expect(container.textContent).toBe("Hello my name is Husna");
	
});