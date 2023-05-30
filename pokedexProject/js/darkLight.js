function darkLightMode() {
  const body = document.querySelector("#body");
  const radios = document.querySelectorAll('input[name="theme"]');

  let themeColor = window.localStorage.getItem("theme");
  console.log(themeColor);

  if (themeColor) {
    selectTheme(themeColor);
    updateRadio(themeColor);
  }

  radios.forEach((x) => {
    x.addEventListener("change", function () {
      selectTheme(this.value);
      //   if (value == "dark") {
      //     body.classList.remove("light");
      //     body.classList.add("dark");
      //     window - localStorage.setItem("theme", "dark");
      //   } else if (value == "light") {
      //     body.classList.remove("dark");
      //     body.classList.add("light");
      //     window - localStorage.setItem("theme", "light");
      //   }
    });
  });
}

function selectTheme(value) {
  if (value == "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    window - localStorage.setItem("theme", "dark");
  } else if (value == "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    window - localStorage.setItem("theme", "light");
  }
}

function updateRadio(value) {
  if (value == "dark") {
    document.getElementById("darkRadio").checked = true;
    document.getElementById("lightRadio").checked = false;
  } else if (value == "light") {
    document.getElementById("darkRadio").checked = false;
    document.getElementById("lightRadio").checked = true;
  } else {
    document.getElementById("darkRadio").checked = false;
    document.getElementById("lightRadio").checked = true;
  }
}

export { darkLightMode };
