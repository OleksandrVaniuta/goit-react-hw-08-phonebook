"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{7270:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var a=n(9434),r=n(2791),c=n(188),s=n(1553),o=function(t){return t.contacts.contacts},l=function(t){return t.contacts.isLoading},u=function(t){return t.contacts.error},i=function(t){var e=o(t),n=function(t){return t.filter.filter}(t),a=n.toLocaleLowerCase();return" "===n?e:e.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},m="ContactList_list__3daws",d=n(7247),f=n(2716),h=n(9421),_=n(184);var v=function(t){var e=t.id,n=t.name,r=t.number,s=(0,a.I0)(),o="tel:+".concat({number:r});return(0,_.jsxs)("li",{className:h.Z.item,children:[(0,_.jsxs)("p",{className:h.Z.contact,children:[n,": ",r]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("a",{href:o,className:h.Z.contactsLink,children:(0,_.jsx)(f.Z,{className:h.Z.call})}),(0,_.jsx)(d.Z,{onClick:function(){s((0,c.GK)(e))},className:h.Z.trashIcon})]})]},e)};var x=function(){var t=(0,a.I0)(),e=(0,a.v9)(l),n=(0,a.v9)(u),d=(0,a.v9)(o),f=(0,a.v9)(i);return(0,r.useEffect)((function(){t((0,c.yF)())}),[t]),(0,_.jsxs)("ul",{className:m,children:[e&&!n&&(0,_.jsx)(s.Z,{}),n&&(0,_.jsx)("b",{children:n}),d.length>0&&f.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,_.jsx)(v,{id:e,name:n,number:a},e)}))]})},j=n(3571),p="Filter_filterEl__0vD7t",N="Filter_filterInput__1Cysk";var b=function(){var t=(0,a.I0)();return(0,_.jsx)("label",{className:p,children:(0,_.jsx)("input",{type:"text",name:"filter",placeholder:"Find contacts by name",onChange:function(e){return t((0,j.KJ)(e.currentTarget.value))},className:N})})},C=n(9439),Z="ContactForm_form__dhl+T",F="ContactForm_contactName__jsNJQ",g="ContactForm_contactTel__+jwRv",y="ContactForm_contactNameInput__E1NtV",k="ContactForm_contactTelInput__tOlVB",w="ContactForm_createBtn__L0Zd-";function I(){var t=(0,a.v9)(o),e=(0,a.I0)(),n=(0,r.useState)(""),s=(0,C.Z)(n,2),l=s[0],u=s[1],i=(0,r.useState)(""),m=(0,C.Z)(i,2),d=m[0],f=m[1],h=function(){u(""),f("")};return(0,_.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=t.find((function(t){return t.name===l})),r={name:l,number:d};a?alert("".concat(r.name," is already in contacts.")):(e((0,c.uK)(r)),h())},className:Z,children:[(0,_.jsxs)("label",{className:F,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l,onChange:function(t){return u(t.currentTarget.value)},className:y})]}),(0,_.jsxs)("label",{className:g,children:["Number",(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(t){return f(t.currentTarget.value)},className:k})]}),(0,_.jsx)("button",{type:"submit",className:w,children:"Add contact"})]})}var L="Contacts_contactBox__mjjBx",T="Contacts_contactTitle__nTKBS";function z(){return(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)(I,{}),(0,_.jsx)("h2",{className:T,children:"Your contacts"}),(0,_.jsx)(b,{}),(0,_.jsx)(x,{})]})}},7247:function(t,e,n){var a=n(4836);e.Z=void 0;var r=a(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=s},2716:function(t,e,n){var a=n(4836);e.Z=void 0;var r=a(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");e.Z=s}}]);
//# sourceMappingURL=270.a2903eaf.chunk.js.map