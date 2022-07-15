# _Qmori artist and Life2D expert online presence_

<br>
<br>

## **Table of contents**

---

<br>

- [_Qmori artist and Life2D expert online presence_](#qmori-artist-and-life2d-expert-online-presence)
  - [**Table of contents**](#table-of-contents)
  - [**Abstract**](#abstract)
  - [**Technology Stack**](#technology-stack)
    - [**CD/CI**](#cdci)
    - [**Code**](#code)
  - [**Implementation Details**](#implementation-details)
    - [**DevOps**](#devops)
    - [**Application**](#application)
  - [**Licence**](#licence)
    - [**MIT**](#mit)

<br>

## **Abstract**

---

<br>

This project will serve as a point of contact for fans and cunstomers of the Live2D artisan Qmori.  
It will be implemented using CI/CD practices fully managed by github.

<br>

> ### Project is planned to be executed with the following milestones:
>
> - [Development prototype](https://github.com/nezirdz/qmori/milestone/1)
> - [MVP containing contact form](https://github.com/nezirdz/qmori/milestone/2)
> - [Social Media integration](https://github.com/nezirdz/qmori/milestone/3)
> - [Live2D previews](https://github.com/nezirdz/qmori/milestone/4)
> - [Advanced analytics features](https://github.com/nezirdz/qmori/milestone/5)

<br>

<br>

## **Technology Stack**

---

<br>

### **CD/CI**

<br>

> - github
>   - github project
>   - github actions for test automation
> - netlify
>   - netlify CMS
>   - netlify CD with github integration
> - jest
>   - unit tests
>   - integration tests

<br>

### **Code**

<br>

> - React
> - Typescript
> - Gatsby
> - GraphQL
> - REST

<br>

## **Implementation Details**

---

<br>

### **DevOps**

The website will be hosted by **netlify**, which can directly access the github repository and do _partial builds_ upon pushes to a defined branch.

Application testing will be done per

> **unit test** -> **integration test**  
> automated by github actions from branch  
> **feature/\*** -> **develop** -> **main**

Test automation will be handled by github actions in predefined yaml files.
Note that integrated automation test will be rudimentary as this is a one man project.

<br>

### **Application**

The application will be written by the static site generator **Gatsby** in **_React / Teypescript_**.  
All tests will utilize the JEST testing framework.
The UI will be made with customized **material UI** components specifically because of the easily configurable themeing interface.
The social media integration will be handled with the provided public API's.  
Implementation of **Google Analytics** is planned for the feature complete website.

<br>

## **Licence**

---

<br>

### **MIT**

<br>

_Copyright 2022 Nezir Dzanko_

<br>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> **THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.**
