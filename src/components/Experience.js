import React from 'react';
import Projects from './Projects';

const Experience = () => {
  return (
    <div className="container-fluid " id="software">
      <h1 >
        <strong className="card col-md-2">Experiencia</strong>
      </h1>
      <Projects
        job="Full-stack software developer"
        screenshots={["3h1.png", "3h2.png"]}
        phone={["3h3.jpeg", "3h4.jpeg", "3h5.jpeg"]}
        bussiness="3 Hermanos"
        brand={"https://pbs.twimg.com/profile_images/1179440892685541376/f2CJLhc5_400x400.jpg"}
        title="Aplicación móvil y aplicación web que permite a la empresa evaluar aspecto y llevar el control de todas las sucursales en la República."
        movil={{
          description: "La aplicación permite a los gerentes y supervisores 3hermanos evaluar aspectos tales como limpieza y orden de los productos. Cada reporte es apoyado con evidencia fotográfica y firma digital del evaluador.",
          technologies: "Ionic v3, MongoDB, ExpressJS, NodeJS"
        }}
        web={{
          description: "La aplicación permite al director gral. revisar y consultar los reportes realizados, pueden ser ordenados por fecha y generar un PDF para su envio por correo.",
          technologies: "React JS, MongoDB, ExpressJS, NodeJS"
        }}
        github={{
          client: "angel-zepeda/3HermanosIonic",
          api: "angel-zepeda/3hNodeAPI"
        }}
      />
      <hr />
      <Projects
        job="Full-stack software developer"
        screenshots={["mobik_cap.png", "mobik_cap2.png", "mobik_cap3.png", "mobik_cap4.png"]}
        bussiness="Mobik-GC"
        brand={"data:image/jpeg;base64,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"}
        title="Aplicación web que permite a la empresa generar cotizaciones de mobiliario llevando un control de sus provedores y materiales."
        web={{
          description: "La aplicación permite la creación y exportación de cotizaciones de mobiliario realizadas con los materiales que se tengan registrados en la aplicación.",
          technologies: "React JS, MongoDB, ExpressJS, NodeJS"
        }}
        github={{
          client: "angel-zepeda/gc_client",
          api: "angel-zepeda/gc_api"
        }}
      />
      <hr />
      <Projects
        job="Full-stack software developer"
        screenshots={["issste_cap.png", "issste_cap2.png", "issste_cap3.png"]}
        bussiness="Cumplimientos y sentencias ISSSTE"
        title="Aplicación web para la digitalización y control de información sobre los pensionados de la delegación Poniente CDMX"
        web={{
          description: "Aplicación web que permite almacenar los expedientes de manera digital, complementando el registro con información del pensionadao tales como (número de pensión, tipo de expediente, nombre de pensionado), ademas de poder exportar la información a un formato XLSX.",
          technologies: "React JS, MongoDB, ExpressJS, NodeJS"
        }}
        github={{
          client: "angel-zepeda/isss_client",
          api: "angel-zepeda/isss_api"
        }}
      />
      <hr />
      <Projects
        job="Full-stack software developer"
        phone={["citnova1.jpeg", "citnova2.jpeg"]}
        imgSize={{ width: "140", height: "45" }}
        brand="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfMAAABlCAMAAABumfqTAAABDlBMVEUAAAD///9AQEBvb2/s7OzBwcFbW1vS0tLe3t5TU1P8/Pytra35+fl+uzmCvD329vaQwUqSkpKIvkKbxlbY2NitzmyGvUCz0XWoqKjp6emBgYGVw0+zs7N7e3t5uTWgyF1mZmaNjY1KSkqlymKx0HK/2IW7u7tCQkIvLy+Hh4ccHByamprD2ovJyck4ODgxMTEhISERERHP4Jy926hjsADl8N13vTDY6cyw1JVrsx3Q4J1+vEd5vjITBRcdJhNATjRmhkpCVC9jjTpyrTqUxmuOuWuq0Y3U58dEeACYyHJZfjVMYzNpmToeGR4tPR/F37JPgB5Ndx4eFiOKwlwuRhYwOCdzqz2FtVsnLCNHQUvsAlQLAAAT9UlEQVR4nO1dC3fbthWmIjmSJduKFzexM8mmnDZ+1a/GdqMm3aPt0jXN1m3Zuu7//5ERJEFcAPcFOZbkc/Kd0x6HAkEAH4H7BJi1PiEdO+2swLiz6HbMhmzRDbiPWMlqnC66JTPhE+fpaCjPsp1Ft2UWfOI8HceO83zRbZkFCZz3+9uDwWD08AHEWdsVOK8unQMxd/FgVhz2mkq22FrOUxbYrUOqlhf6OjKA8MfTk/ZgC7+vfUY8u42Xp9GhenG2qbldx3mn6MpxhmIV1BUPRBe/SYNjV8sJXzJhgaXbM1DXsQ1vG3k/9c7Ki8/Q++herOk7ELfAx1Bxu8z5sLfJDTjGOVjxBty9PPZdLQ/Ygpf60fronPvLg706QW8kn40Xp0FMP4ORfLfIee8hO9w45xlYYp4J9zNw7e/zBR+qR2sGztdGB/sHI7Bee69xDxZ1bwM63drUs8/U7S8xYobiUHE/y3nniHmjaqCcZyvu6qVYBYVLpxgIMgI8jkcy50P7zq42NMIX8NgrvN9cP8Hq6t2+/SXYadiT72c474z5ga7HAtQFxsK96MNDTTUowEsrtEUr0lM577uX3nUJCGZvKV1z17fR2s6oh58rm1+CfnUMFJYEyXlHuSjjnGcXTi+5hR4HNFpepF9odBe2LTjncBAum2cc2EuBUHETEJ3nrVPy6Sl2vqDRygohwblujhsQnGdH7voKcasCzg4b8jICNINDIuc7XhGnpdSSOZzNR01RfOBptQTX9FGskZVUwF83CJxzTksIQHEO9bhcX10IJ9Jf8AUnqgFL5Dx4890P/cH29igitlOW+vYPf/zTS4OvowL0FFW1vgS9WFR4INaAPayXIoFJzjOg6uYJFfo4cJVM+JKEJ8TH7TgXVa2db7M/f/f97s3N1ODq6odXwciSj9drcaRSYCH6qBDOhQkVgOYczNEd7E4dJureagYsjfNwLRZt+Ou/rN/c7DrcTK9+uIYFSJVbnp015KEU5UQ8UrlYqQeGc+BUuYUe54wPXmGFSwKJxHn+gCxzum3Q9Yu/nU4LotcrbBT/Ff8qWAclaKGp1eIUqrWkz4acd+QqfTCcQ7VWUDY5OKkoOPUm8oglch54UazOtjO2CuXx2BW+fj01hG9sbDypUPxlaJ9OwVS/oJ4/bumgcHdIvriA8y25xgAc51CxzZNrtgDLxRFfUnY8JnIeOLbRq/bGr6+KVb1g/MnvDB49Mv9/UrF+5cQ6PU3FtpdQaddCHf7vjPOeAst5Bha/A+RnHdybsyaIdDFxJdU+94rU7o7wxasMlLdXlvFHDgXtBeuQ9GFiA0KsSoNlIGhxHuczUC5wDlhIlhpYJZIGIw0ZzTnuOfPWvUrkxjN1Ulz9saS8Yvz3DQztT3zSc6oBKg+DThne5yuBozSTzBU4vyDGLw39phLBOpU8jzTnffwGMCaVlwmzalZa1zXlJeGPGxjWi6luSP9RHAWFp1wbseK1OMD5bBNR4ByyIBjYDIAPVnAQCiKd5Jz0Xm0588r8E1+b++s3DeWPH+/t7T3fM6hYr0hvFDmy6ZrooDBOFkd8Jc1fM9rQEudQuMweVx1JT2nAzxaSc3+a97vdrhUobqbTXfhrTXnF+HMLQ7slffpTXR+thckxA61/lI+oOs5njHmKnAM9bo20VEQ4LxutBZU4ZEeO4tyb5ivn5bX9Qd+/xfwLDS5fFHZ4Q3nB9Wc1DOvFVK9k+lU90enlVPaUqx2kbKZXw3murS6AzPm5M7CHcjyewAM3EQUrnU1AIDi/BJ7xnby5XIZPm3fMaEa4NH5nprlZ2MtJXpD9eYmK9XKmP9nYvbG+GVI6ifkOglMKgNVrLOczx75kzmHu0uwhNhCyIfNNKnC+R4JzMETeuJbhU7u496hR/7bW34pZXjH+tIJh3ZIOJjqthnaxJgPkfMchOBFXcy5EKhkAjydZZuLKJETsAoDlSjD1mWgLwTkYId8ALuPyZT7gZVkGdQr9XE3zYmXfe14z/kUBw3pNejnRG4lOOhmEBFhBqnng5ETNea6sany01fMB/MT0bc7A7jc30s6A1Z0eBvcgaY2jScc5Bxpz2KpyBRj2Tuqnoyrc+5tKmhtZbij/wqIivZno01o+0Ysdz3mSLS1yrgqlnU2EcCV9K+Yfo3suGy1Ce+loC845sAoihcO/Hxv2v30Pp3lJ+ZcGNel2orvFnZ6vvBYnRlEhGF9cpq0tlyO89M0fm3PJ1CcXSZxz17xYR/O7ja0wf6+X9nqaW8pL1p8+rSZ6tbi/lFrP6p9SsoQPJsqY6Wo71GzzoG//6Jz3BasF96QSnAM1NBY4vgaMOTGMOK+X9mqaF2x/VcCQXk70vZL0jfXpL3UttC+O85Qnejfo2EPJuWj2Hal2WqQ9/1aci05DIhyNcg6W9tgODJaM/fj2d4BzI80N5d98840hvZjozeJeCPTXTC0VmIhqigZnQPviMnb0a6jSjubLubg24a4ZlHNQNOY8Fyv4x5tChXv06HHFuZnmhvKSdLi4Q85p64Wenck7gsiazC/SNNc4/8u6knpyS84lxzvulcA4hwGteG2fBDXEqk/N+e8fP484/5LgnB4qOqKa7MMkFbBMnjFayu+W8+3NAJLlgurAGOewYJxIHErYWKjMwjmpxV20CKRpcAZkcDYTJ4ya8rvlXJUs4AF7zzHOvXJRkmJURbQu/9PI80dWnpecl6R/9SW5tjPCmVKW1RsOHKjIQyYFVyR/IKyLxEfgXNoriQAJiWOcewXC6YSstSN/wP71dtq4ZCqPTEn6V7EONwWZz+QrTAg2+iW5IGMYlBM6E1JSEzZYLB3nyDqJdDZYAtvcjxW8TT7j4ctpY58HtlrtlKkdcc4+xxtSA19X6UzALdIIOEZrMpyzZt9hynZ4uprFcJ5NolqQoQ7fakg61f0duyV/UvTs+srzyTxtfDJfhD6Zr10NfXJ24r64c7KTjKQnEkgypjb6LqIuEgviPBbpCOfRGI/Qn9a2JuPxeLMxW4enp1a9e23CarVAt/72knHoezW5MvApdLgB6z3tbN5mdsEREdWMjVeQWiReF4lFcR55FhDO47W0/yI/Ozs72Ab6QMfN/vhUuFfTxinjSLeBtYpyw/nNT/Am2qmEaXE5VdhE/mkLBpcTGZsSlbYXnq5nYZyHLy3Cucbh9MJT20LHbr24A9ItqrBaHWKBS3uLyQJAuk9PzDb7Ky4nMjZaodzVbesisTDOw7TfmHMhOWVraxgr2eGa+eHGpkZVpH8OUybsNN9d1/Y/np3CTM7Jn1F9JONcG/pzWqq6SCyO82BSpnE+LM9WacePDkgvJ3qVKGPT4T7/rEqNAtHzH4PayVMU4tlJ9q46oIKW9mjMJuPCqPoz0/iWLZJz/9kx54zKwiTkB2P5YWpX9yrttc6AfF4u7HUO5G5YPa3FhbOT1sxrhki/LLrdle5WlnyyJV3RnXIuxRhhL2LO6T0fnKYTvCnX093djY0mvR2kOjeUX12H9dP6djg7SQvcCl/aesdGnulXyuEHQl13yrkUI4LVxZx7a39/NNhu2sqmWgZG7CuzulvSH+/tgS0NFeXQHyM+IMh3oF8+Gy+lvXRYRJXrV+phpnRNd8t5R0jgBP3mOa/Cle2hMI4G4aL5tiLd27wENqxNX7di0Pq2rzvTZzI2jnFyJcDOS+T6leJ35eu6W87FZFpncrKc5/ZaKU+Fs3pCufcK2aRY7kw1G1OnH9ABI99Vf+TJNriBEiW+jif9Nni5rjvmXEwbagjiOHfTrsyNETiPDKpX8Wbkcgf6Okk5o2/Dia7ikyyDDCbXrfvDuRRpbU6r4zgHL475p5CLNIla+HJ6Ux4z8aQ6daA6cqDck4rI8hb/CDg7VTEUev2PFXGuW/eIcynj3Yp0jnNwsVSc+WTgSX3XToH6z+sPN2/q00VqlEeLrEcaewNyfQJiWKef0a7cWIvjunVv5DlbW4Vaz07hnE+iryoclS9G27L+7/eGdXuK0Lo5OOp16IqBoPl0okNph9H2XAJPWGkedEV3z7m4ub1yq3OcgydIo53VS2Yz0BVFhS75n3e/vrl58+bN7huDX//7S4sFyVSTbku/Fr5FR+uxUWyU6xZ19gIFuqI5cM7HhG2xmHOXy+xGzRqpzHt0bDQE4EkDbfzt53ffvf/1/Xfvfv4t+5+tfNhBYxe0fmY1ELVflSwXDSfdq+y++F7rAtI5qKXDjfW9No84X6kX687oaIKrh+Ogwyd4C2rlsTysYhWL4JHNtbOTzK24DDy0dMJcaGJknLcpUYmjK5oH5+KmO7OK8zEWMGyHzSzCve6nwQNNm7G3ztvNimRakSGuul36OCntrQtLZtyHNy7SFne6orlwLu1LN1NHiKtBj94p9+T9sAdGHFCcO6ERa8U0Uz2hT1FVdAJ8IFYydntEQtJra/GcS0fNXHawnAlov3qhrlOm2k7YA4ZzqIXFQp3U4nK+S/Eg0QMaSn7WslWeii4O+Zw4l7Z0HUp5MkHpGrGiFRsBZZtj/s6CjsZ7J2ktzvxKx1tj5YDufbDdVYhKKXeqISPmYU6ci4catpE3HHQxEK6Nmz7kxd6yH5SNF+J2cDcyidjUCfJEDSzVgzYz/PHPWjlZ0gAbfgp0LfPiXNztggwLUFRz/5d9/Bdr3XWPnKeuWohj4WwEh8A5d44/vQhjm63pHI8gZiPMDWojNwa6lrlxrj9Nq4Ez0MPFERK0c1LNx32b9tqFrllr8IX20jjsKJJUStuYXUaDQ619coz8FI9M2smd8GVKupL5ca4/Tiu+n+O8wE6n02kUvsBTbrk8wyoAV7DkY7Jn+/SIutSGncHI4gU9Rp4vLuM8tQaHenuNrmR+nM9wTnEzZdaCeDZzVG40AeupMYSDad8Z1yQ0gkG+ppe089e9O7q9i96QZmJ4Qr99ia5jjpynb+B8QT2D/uAsEg+zM33bOs4u3e3WB0Ic/ZAuj9wKpD19Ai4wGctViXPtTKermCfnyd/wwzzuJchd2OgGw2ZqDDbPi/flFE6Vrpn++5RulP5N2UHyvfD9NSMmhaQulPmvdA3z5DxZpIPUNm9xpz3PaGQ9cTMAQOpJMSBZQviQLAB4nvlbPtFZt4eJvn+unCefQ+9e6SHwX16Sm3iIfcSqMUKResi5exv1p0/APCrzP8lRnWVn4lcvWsvDeSsX++MBxCDcIcSW8q2V9mq+4lkvRHZLYhQSIHVlcsPJ698Q8Fxe8z/N0e3xdswImkY63CHnqV8fgPdulgv3w0pi9p24fOamPeH4gaZd91lRzeoz7bksaQenuGSJFKng2lL1V7UaHpwKWxbpW+fMeern3HwP87BA9Zd/hIOdx5QTxTXbBVnPdO6NtJOPnaQVvkPlwWlx9Ygp73s4OV2htXj6vnlznmilE0ZZ6MusHSEi5154WrfiJ51r7xhIMlEaQ6Iesdm/c6g5y3v+nCcIOrKKeEwqwS9xHmhkqqM6UpwKzuRL+8ppszxkMzzUg+LM/kVwrl25KqCTEZlE5bBRnK8S/dII9RQNxJkZaV+9aGxSO2IzfzVjWTlP+rIXtiEZk5VVOcLMqR2r0auiSkKQMjgdnAtpVnU/m7UCi2XlPM3oRSY6mmpUqmSEstClxlHjx9R/tMRpcLKJ7cOa9W7E0oRDg6XlPMkAio9Sw9eJctgI07a6DzGBNGqc2uo6b27R++Bq2NUMjNhsIn15Oe+nnIobaVq446UKtaETrFatEOVRlT6sXZacjZH+aZu6k3DE8uRKsmXmPOlY3CjXiDB9S8sd07hs+BH5SSXQtbPW+UiSPtVRoh5Yb8Ty5FqWmvMkgRcuwBzn2NvUKEgxdJmkugNzXDh2ls+WVSaEP2J5ejXLzDmdXxgjPMyX5TwmvdGsEAkpfx8RrRKFyz5P1eAMKsEQjFieXM1Sc55g9io5t84snyHwwU5EqVeml2msZZe6M9vnbctbwxFL1t6XmvMEPSfkHE9GcHloIPySbYP8COQ14xoIwO0oap7UlJ7lW/X1chQ1aCXxGxDLzbneSg85x5cIL9XldJLn+cNBsNknWnN1S7vOXHOlZ/vwZbm7IR6xofBlygBLzrna8R4dzo8OwwxpBOKXbxvIDgWXQ5nkZgQwWhw2YknLxrJzrhXpEeeYTiV80LRC4InTvCYVZB5d0DfdUKtgtDh0xHYSXFjLzrk2ZBh/hCP2yjSnvAx7vR7tUe0Bl/uDlGOSpTWJ+TZiAHY7KzFiK2pxsfScKxMLkA+vRI+0krttRud47NM5XBs2r8FRPXzHKduA5AVWv7+Ejp6skJy3htpEwuXnXKfuYB828595XlPeSAvvpIc8M69B88+t7fF4lLTD00BoY8KHUkhN/IDmvNVam6hkxj3gXDp1pAT6MbsT8LpYMw2o1+BErzoWymx90YD3s2gNAAPa5u4wnBdYUeTe3APOVU4H/AOG/cF+Rbv7DvgmdlPTutTz1XzwjpaUY7Zp1XXMc140Qgy23QfOW7nUC+6jlb2uZ4HDm2wI1o0wdqZuArilNe3IZfK4wWOJ8wLdbVadvBecKzKlaM65qurZD2ZV4vlqAbgVKS1/njZXRqoR21nZJK03IMHo5qZxjsahaPNR1QO6bTWWg3Mmokp9IY+qidRcH+p33Kyddkd5O8LElUB+rZBjRmqXLI6mHm+2qSCZqvXb1MNsE9V2kPdse45cc+GWa3trQI5KmtlXLBlkTbfYZTV39HHMuRWQ8uZwnkbypJ6LvAjcJ86XAzBU5xaH2sK5pa02H3ziPBV9F3yBymaeeT6ZZcYnztOxilBebnObt5iZEZ84nwEjM6nbs+89XjD+D0QRrqJPM3wGAAAAAElFTkSuQmCC"
        bussiness="CITNOVA"
        title="Aplicación móvil para la gestión de quejas, sugerencias y aclaraciones realizadas al Instituto CITNOVA."
        web={{
          description: "La aplicación móvil permite a los usuarios de CITNOVA poder realizar quejas y sugerencias acerca de alguna de las áreas con las que cuenta el instituto, las aclaraciones serán respondidas por el supervisor de cada área del lugar.",
          technologies: "Ruby on Rails, Ionic v3, PostgreSQL"
        }}
        github={{
          client: "angel-zepeda/citnova_mob_app",
          api: "angel-zepeda/citnova_api"
        }}
      />
      <hr />
      <Projects
        job="Chat-bot developer"
        screenshots={["ixmi1.png", "ixmi2.png"]}
        imgSize={{ width: "128", height: "50" }}
        brand="https://ixmi.mx/img/ixmi.png"
        bussiness="Ixmi.mx"
        title="Asistente virtual para aclaración de dudas acerca de los parques o balnearios de Ixmiquilpan Hgo."
        web={{
          description: "El asistente virtual 'ASPI' es capaz de contestar una gran cantidad de preguntas en relación a cada uno de los parques de ixmiquilpan. Gracias a este servicio los visitantes pueden tener información relevante para saber y conocer todos los parques. ",
          technologies: "Dialogflow API v2, Jquery, Html, Css, JS"
        }}
      />
    </div>
  );
}

export default Experience;  