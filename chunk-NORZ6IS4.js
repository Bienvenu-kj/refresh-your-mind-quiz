import{c as H,d as M,f as b,g as P,h as O}from"./chunk-ZSSD5RUB.js";import{a as j}from"./chunk-5LQ2ELDD.js";import{a as Q}from"./chunk-Y2YIIYXK.js";import{A as _,C as z,D as B,E as T,F as i,G as a,H as d,I as A,J as C,K as v,L as I,M as p,N as y,O as S,aa as G,c as g,j as f,k as q,l as D,m as h,n as x,r as o,t as s,v as L,x as w,y as E}from"./chunk-7JDHDX52.js";function F(m,t){if(m&1){let n=A();i(0,"button",29,0),C("click",function(r){let c=q(n).$implicit,l=I(1),u=v();return D(u.validerReponse(r,l,c,u.question))}),i(2,"span",30),p(3),a()()}if(m&2){let n=t.$implicit,e=v();E("good-answer",e.thereIsWrongChoice()&&n===e.question.answer&&e.ChoiceAlreadyDone()),w("@DispApparition",e.apparaitre()?"apparition":"disparition"),s(2),_(e.chargement()?"btn_message_chgmnt":""),s(),y(n)}}var k=class m{quizS=f(j);MsM=f(Q);router=f(G);subscription_question;subscription_score;subscription_vies;subscription_material_icon;question;onVeutQuitter=o(!1);score=o(0);vies=o(5);apparaitre=o(!0);chargement=o(!0);ChoiceAlreadyDone=o(!1);thereIsWrongChoice=o(!1);sontDesactives=o(!0);material_icon=o(!0);buttons=document.getElementsByClassName("choice_button");ngOnInit(){this.quizS.getQuestions(),this.subscription_question=this.quizS.question_observ.subscribe({next:t=>{this.question=t}}),this.subscription_score=this.quizS.score.subscribe({next:t=>{this.score.set(t)}}),this.subscription_vies=this.quizS.vies.subscribe({next:t=>{this.vies.set(t)}}),this.subscription_material_icon=this.quizS.material_icon.subscribe({next:t=>{this.material_icon.set(t),console.log(t)}})}toggle(){this.apparaitre.set(!this.apparaitre())}ngOnDestroy(){this.subscription_question.unsubscribe()}validerReponse(t,n,e,r){return g(this,null,function*(){let c=t.target,l=c.classList.contains("btn_message")?c.parentElement:c,u=r.answer;n.classList.toggle("onChoose-answer"),this.MsM.SetonChooseAnswerSound(),this.ChoiceAlreadyDone.set(!0),this.activOuDesactiveButtons(this.buttons),yield this.quizS.attendrePendant(2e3),e===r.answer?(this.MsM.SetonGoodAnswerSound(),l.classList.toggle("good-answer"),yield this.quizS.attendrePendant(3500),this.quizS.upDateScore(!0)):(this.MsM.SetonWrongAnswerSound(),l.classList.toggle("wrong-answer"),this.thereIsWrongChoice.set(!0),yield this.quizS.attendrePendant(3500),this.quizS.upDateScore(!1),this.quizS.upDateLife()),yield this.quizS.attendrePendant(1500),this.quizS.putQuestionDone(r,e,u),this.ChoiceAlreadyDone.set(!1),this.thereIsWrongChoice.set(!1),l.classList.remove("wrong-answer"),l.classList.remove("good-answer"),n.classList.remove("onChoose-answer"),this.toggle(),yield this.quizS.attendrePendant(2950),this.toggle(),this.quizS.sendQuestion(),this.activOuDesactiveButtons(this.buttons)})}activOuDesactiveButtons(t){if(this.sontDesactives.set(!this.sontDesactives()),this.sontDesactives())for(let n of t){let e=n;e.disabled=!1}else for(let n of t){let e=n;e.disabled=!0}}allerAl_accueil(){return g(this,null,function*(){this.router.navigate(["home"]),this.quizS.reset()})}questionSuivant(t){return g(this,null,function*(){throw new Error("not implemented")})}static \u0275fac=function(n){return new(n||m)};static \u0275cmp=L({type:m,selectors:[["app-gaming-page"]],decls:33,vars:6,consts:[["buttonChoix",""],[1,"container","transition","duration-1100","flex","flex-col","gap-y-10","items-center","py-7","px-4","h-full","relative","max-w-screen-sm","m-auto"],[1,"bg-[rgba(0,0,0,70%)]","flex","pr-7","pl-3","w-[80%]","min-[630px]:w-[60%]","justify-between","border-[4.7px]","rounded-[2.5rem]","border-yellow-200","h-[11%]"],[1,"flex","items-center","relative"],[1,"h-max","w-max","relative","top-[-8%]","flex","items-center"],["aria-label","icon de score","width","42","height","42.764","viewBox","0 0 52 53.764","fill","none","stroke","none","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg",1,""],["color-interpolation-filters","sRGB","x","-16.001","y","-17.764","width","18.001","height","19.764","id","filter_1"],["flood-opacity","0","result","BackgroundImageFix_1"],["type","matrix","values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0","in","SourceAlpha"],["dx","-2","dy","-5"],["stdDeviation","6"],["type","matrix","values","0 0 0 0 0.992 0 0 0 0 0.902 0 0 0 0 0.541 0 0 0 1 0"],["mode","normal","in2","BackgroundImageFix_1","result","Shadow_2"],["mode","normal","in","SourceGraphic","in2","Shadow_2","result","Shape_3"],["id","Forme","d","M9.9615 0.301464C9.83974 0.138287 9.65687 0.0316257 9.45489 0.00597811C9.25291 -0.01967 9.04919 0.037899 8.8905 0.165463C6.97405 1.70403 5.70992 3.9101 5.3515 6.34146C4.69468 5.86516 4.11895 5.28606 3.6465 4.62646C3.51658 4.44486 3.3125 4.33058 3.08977 4.31473C2.86704 4.29888 2.64883 4.38309 2.4945 4.54446C-0.21561 7.37949 -0.77777 11.6431 1.10489 15.0837C2.98756 18.5243 6.88151 20.3496 10.7304 19.5956C14.5792 18.8416 17.4966 15.682 17.942 11.7854C18.3873 7.88876 16.258 4.15239 12.6785 2.54946C11.6062 2.02803 10.6745 1.25716 9.9615 0.301461C9.9615 0.301461 9.9615 0.301464 9.9615 0.301464ZM12.7485 12.2655C12.7475 13.7476 11.8736 15.09 10.5188 15.6909C9.16395 16.2917 7.58232 16.0383 6.4831 15.0441C5.38388 14.05 4.97332 12.5017 5.4355 11.0935C6.06351 11.5585 6.78551 11.9035 7.56851 12.0935C7.78079 10.7244 8.46107 9.47128 9.49351 8.54746C11.3571 8.79563 12.7489 10.3854 12.7485 12.2655C12.7485 12.2655 12.7485 12.2655 12.7485 12.2655Z","transform","translate(19 22)",2,"fill","#FDE68A","fill-rule","evenodd","filter","url(#filter_1)","mix-blend-mode","normal"],[1,"h-full","flex","items-center","font-bold","text-yellow-200","text-[1.2rem]",2,"font-family","rajdhani,sans-serif"],["aria-label","home",1,"navigation_button","size-12","self-center","transition","flex","items-center","justify-center","hover:bg-[rgba(0,0,0,40%)]","rounded-[50%]",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor","aria-hidden","true","data-slot","icon",1,"size-5","text-white","navigation_button"],["d","M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z",1,"text-yellow-200"],["d","m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"],[1,"relative","flex","gap-x-3","items-center"],[1,""],["id","vies","aria-label","icon de vies","viewBox","0 0 24 24","fill","none","stroke","none","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg",1,"size-[1.25rem]"],["id","Chemin","d","M11.5631 23.8807L11.5545 23.8767C11.5545 23.8767 11.5274 23.8607 11.5274 23.8607C11.369 23.7663 11.2119 23.6694 11.0561 23.5701C9.18267 22.3641 7.43186 20.9473 5.83275 19.3433C3.00062 16.4805 0 12.2324 0 7.00027C0 3.09617 3.03262 9.47714e-05 6.69292 9.47714e-05C8.75421 -0.0108428 10.7078 0.99632 12 2.73616C13.2925 0.995954 15.2466 -0.0112497 17.3083 9.47714e-05C20.9674 9.47714e-05 24 3.09617 24 7.00027C24 12.2337 20.9994 16.4818 18.1674 19.3419C16.5683 20.9459 14.8175 22.3627 12.944 23.5687C12.7882 23.6685 12.631 23.7658 12.4726 23.8607C12.4726 23.8607 12.4455 23.8767 12.4455 23.8767L12.4369 23.882C12.4369 23.882 12.4332 23.8834 12.4332 23.8834C12.1622 24.0389 11.8377 24.0389 11.5668 23.8834C11.5668 23.8834 11.5631 23.882 11.5631 23.882L11.5631 23.8807Z",2,"fill","rgb(16, 210, 58)","fill-rule","evenodd","mix-blend-mode","normal"],[1,"font-bold","text-[1.2rem]","relative","top-[3%]","text-green-500",2,"font-family","rajdhani,sans-serif"],[1,"w-full","h-[calc(90%-2.5rem)]","flex","flex-col","items-center","justify-between","gap-y-4"],[1,"w-[90%]","min-[630px]:w-[70%]","tracking-wider","rounded-[40px]","text-yellow-200","border-yellow-200","bg-[rgba(0,0,0,70%)]","flex","items-center","justify-center","text-center","min-h-[35%]","border-[4.7px]","font-semibold","text-[1.15rem]","px-2",2,"text-shadow","0 0 8px rgba(0,0,0,90%)"],[1,"flex","flex-col","w-[90%]","min-[630px]:w-[70%]","gap-y-[1.1rem]"],[1,"tracking-wider","border-[4.7px]","bg-[rgba(0,0,0,70%)]","rounded-[40px]","flex","items-center","justify-center","choice_button","w-full","max-h-14","px-3","py-[0.8rem]","border-yellow-200","text-yellow-200","font-semibold","text-[1.11rem]",2,"text-shadow","0 0 8px rgba(0,0,0,90%)",3,"good-answer"],[1,"tracking-wider","border-[4.7px]","bg-[rgba(0,0,0,70%)]","rounded-[40px]","flex","items-center","justify-center","choice_button","w-full","max-h-14","px-3","py-[0.8rem]","border-yellow-200","text-yellow-200","font-semibold","text-[1.11rem]",2,"text-shadow","0 0 8px rgba(0,0,0,90%)",3,"click"],[1,"transition","duration-500","btn_message"]],template:function(n,e){n&1&&(i(0,"div",1)(1,"header",2)(2,"div",3)(3,"div",4),h(),i(4,"svg",5)(5,"defs")(6,"filter",6),d(7,"feFlood",7)(8,"feColorMatrix",8)(9,"feOffset",9)(10,"feGaussianBlur",10)(11,"feColorMatrix",11)(12,"feBlend",12)(13,"feBlend",13),a()(),d(14,"path",14),a()(),x(),i(15,"span",15),p(16),a()(),i(17,"div",16),C("click",function(){return e.allerAl_accueil()}),h(),i(18,"svg",17),d(19,"path",18)(20,"path",19),a()(),x(),i(21,"div",20)(22,"div",21),h(),i(23,"svg",22),d(24,"path",23),a()(),x(),i(25,"span",24),p(26),a()()(),i(27,"main",25)(28,"header",26),p(29),a(),i(30,"main",27),B(31,F,4,6,"button",28,z),a()()()),n&2&&(_(e.chargement()?"chargement":"disparition"),s(16),S(" ",e.score()," "),s(10),y(e.vies()),s(2),w("@DispApparition",e.apparaitre()?"apparition":"disparition"),s(),S(" ",e.question?e.question.question:""," "),s(2),T(e.question.choices))},styles:["@media (width > 630px) and (width<1060px){#questions[_ngcontent-%COMP%]{text-shadow:0 0 20px #ffc62d}}@keyframes _ngcontent-%COMP%_animateQuest{20%,65%{box-shadow:1px 1px 40px #ffd166}45%{box-shadow:1px 1px 5px #ffd166}70%{box-shadow:1px 1px 20px #ffd166}to{box-shadow:1px 1px 17px #ffd166}}.question-aimation[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_animateQuest;animation-duration:30s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-delay:0ms;animation-fill-mode:both}@keyframes _ngcontent-%COMP%_onChoose-answer-animation{0%{border-color:#f0c460;box-shadow:1px 1px 20px #f0c460 inset}to{border-color:#ffd166;box-shadow:1px 1px 20px #ffd166}}.onChoose-answer[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_onChoose-answer-animation;animation-timing-function:ease;animation-duration:.5s;animation-iteration-count:5}@keyframes _ngcontent-%COMP%_good-answer-animation{0%{border-color:#fde68a;background:#000000b3}to{border-color:green;box-shadow:0 0 15px #004400b3 inset}}.good-answer[_ngcontent-%COMP%]{border-color:green;color:#fff;background:green;box-shadow:0 0 15px #004400b3 inset;animation-name:_ngcontent-%COMP%_good-answer-animation;animation-timing-function:ease;animation-duration:.4s;animation-iteration-count:6}@keyframes _ngcontent-%COMP%_wrong-answer-animation{0%{border-color:#fde68a;background:#000000b3}to{border-color:#7f1d1d;box-shadow:0 0 10px #3a0d0db3 inset}}.wrong-answer[_ngcontent-%COMP%]{border-color:#7f1d1d;color:#fff;background:#7f1d1d;box-shadow:0 0 10px #3a0d0db3 inset;animation-name:_ngcontent-%COMP%_wrong-answer-animation;animation-timing-function:ease;animation-duration:.4s;animation-iteration-count:6}@keyframes _ngcontent-%COMP%_disparition{0%{transform:translate(0);opacity:1}to{opacity:0;transform:translate(-100%)}}.disparition[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_disparition;animation-timing-function:ease-in-out;animation-duration:1.2s}@keyframes _ngcontent-%COMP%_chargement{0%{transform:translateY(-50%);opacity:0}to{opacity:1;transform:translateY(0)}}.chargement[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_chargement;animation-timing-function:ease-in-out;animation-duration:1.2s}@keyframes _ngcontent-%COMP%_btn_message_chgmnt{0%{transform:scale(0);opacity:0}to{opacity:1;transform:translateY(1)}}.btn_message_chgmnt[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_btn_message_chgmnt;animation-timing-function:ease-in-out;animation-duration:1.2s}"],data:{animation:[H("DispApparition",[P("apparition",b({opacity:1})),P("disparition",b({opacity:0})),O("apparition => disparition",M("3s ease-in-out",b({opacity:0}))),O("disparition => apparition",M("2.5s ease-in-out"))])]}})};export{k as default};
