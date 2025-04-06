  const allQuestDiv = document.querySelectorAll(".all-quest-div");
  const allPtags = document.querySelectorAll(".all-quest-div p");
  const minusIcon = document.querySelectorAll(".all-quest-div .img-container .minus-icon");

  const plusIcon = document.querySelectorAll(".all-quest-div .img-container .plus-icon");

  const firstQuestContainer = document.querySelector(".quest-div1");
  const secondQuestContainer = document.querySelector(".quest-div2");
  const thirdQuestContainer = document.querySelector(".quest-div3");
  const fourthQuestContainer = document.querySelector(".quest-div4");

  const anchorOne = document.querySelector(".quest-div1 a");
  const anchorTwo = document.querySelector(".quest-div2 a");
  const anchorThree = document.querySelector(".quest-div3 a");
  const anchorFour = document.querySelector(".quest-div4 a");

  const anchorClickColor = "rgb(174, 55, 190)";
  const anchorColorDefault = "hsl(292, 42%, 14%)";

  const hideChange_allDisplay = (allQuestDiv) => {
    
    allPtags.forEach((tag) => {
      tag.style.display = "none";
    });
  }

  const changePlusMinusIcon = (questDiv) => {
    const mainPlus =  questDiv.querySelector(".img-container .plus-icon");
    const mainMinus = questDiv.querySelector(".img-container .minus-icon");

    allQuestDiv.forEach((minusPlus) => {
      const minus = minusPlus.querySelector(".img-container .minus-icon");
      const plus = minusPlus.querySelector(".img-container .plus-icon");
      minus.style.display = "none";
      plus.style.display = "block";
    });

    mainPlus.style.display = "none";
    mainMinus.style.display = "block";
  }

  const toggleDisplay = (element, event) => {
    event.preventDefault();
    const pTag = element.querySelector("p");

    if (getComputedStyle(pTag).display === "none") {
      hideChange_allDisplay();
      changePlusMinusIcon(element);
      pTag.style.display = "block"
    } else {
      alert("The dropdown is already visible");
    }
  }

  anchorOne.onclick = (event) => {
    toggleDisplay(firstQuestContainer, event);
  };

  anchorTwo.onclick = (event) => {
    event.preventDefault();
    toggleDisplay(secondQuestContainer, event);
  };

  anchorThree.onclick = (event) => {
    event.preventDefault();
    toggleDisplay(thirdQuestContainer, event);
  };

  anchorFour.onclick = (event) => {
    event.preventDefault();
    toggleDisplay(fourthQuestContainer, event);
  };