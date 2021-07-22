const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

    const header = document.createElement('div'),
          dateTag = document.createElement('span'),
          titleTag = document.createElement('h1'),
          tempTag = document.createElement('span')

    header.className = 'header'
    dateTag.classList.add('date');
    tempTag.classList.add('temp');

    dateTag.textContent = date;
    titleTag.textContent = title;
    tempTag.textContent = temp;

    header.append(dateTag,titleTag,tempTag);
    return header;
}

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//
const headerAppender = (selector) => document.querySelector(selector).append(Header('Lambda Times','7/20/2022', '96F'))


export {Header, headerAppender}
