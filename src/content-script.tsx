import React from 'react';
import ReactDOM from 'react-dom/client';
import { TwitterGptButton } from './scriptComponent/TwitterGptButton'

function onToolBarAdded(toolbar) {
  const scrollSnapList = toolbar.querySelector('div[data-testid="ScrollSnap-List"]');
  if (scrollSnapList) {
      console.log(scrollSnapList);

      const newEl = document.createElement('div')
      newEl.style.zIndex = '1000';

      scrollSnapList.appendChild(newEl);

      if (newEl) {
          ReactDOM.createRoot(newEl).render(<TwitterGptButton />);
      } else {
          console.error('Element not found');
      }
  }
}
// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // if from mutated nodes any nodes matched with twitter toolbar then we will inject the buttton we created
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // only if its dom node
              const toolBar = node.querySelector('div[data-testid="toolBar"]')
              // Check if the added node is the toolbar we're looking for
              if (toolBar) {
                  console.log('TooltBar has been added')
                  onToolBarAdded(toolBar);
              }
            }
          });
      }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the document for configured mutations
observer.observe(document, { childList: true, subtree: true });
