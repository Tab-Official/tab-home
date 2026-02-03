import tw from "tailwind-styled-components";
import React from "react";
import { Link } from "react-router-dom";

const P = tw.p`
ml-5
mt-3
font-bold
text-gray-600
`
function FAQ() {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-extrabold">자주 묻는 질문</p>
      <p className="text-xs sm:text-base font-normal mt-3">
        궁금하신 점이 있다면 아래의 연락처 혹은 오픈카톡으로 문의내용 남겨주시면
        답변해드리겠습니다.<br /><br />
        <Link to="https://open.kakao.com/o/g05Lidei" className=" hover:text-white hover:bg-yellow-400 text-yellow-400 p-2 rounded-3xl border-2 border-yellow-400">오픈채팅으로 문의</Link>
        <p className="mt-5">학회장 정병주 010-5440-9130</p>
      </p>
      <div className="mt-10 space-y-5 text-xs sm:text-base">
        <details>
          <summary> 컴퓨터공학부 편입생이거나 컴퓨터공학 이중, 부 전공생도 지원 가능한가요?</summary>
          <P>TAB은 매년 컴퓨터공학부 신입생만 뽑는 학회로, 아쉽게도 지원 가능하지 않습니다.  </P>
        </details>
        <details>
          <summary>공과대학 신입생으로 입학했는데 지원이 가능할까요? </summary>
          <P> 예비 과 선택을 컴퓨터공학부로 했으며, 과회비를 납부한 경우 지원이 가능합니다. 다만, 2학년 때 본인의 전공을 선택하게 될 텐데 컴퓨터공학에 관심이 많은 신입생분이 지원했으면 하는 바람입니다.</P>
        </details>
        <details>
          <summary>
            개발에 대해 막연한 관심은 있으나, 개발에 대한 실질적인 지식은 없는데 들어갈 수 있나요?
          </summary>
          <P>
            다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다! <br />전공 공부와 더불어 꾸준히 학회활동에 참여할 열정만 있다면 누구든지 환영합니다.🤲</P>
        </details>
        <details>
          <summary> 지원했는데 연락이 안와요. </summary>
          <P> 학회에서 별도로 지원 확인에 대한 연락은 하지 않습니다. 사전에 공지된 면접 일정 안내 날짜까지 기다려주시고, 안내 날짜에 연락을 받지 못했다면 홈페이지 하단 연락처로 학회장에게 문자 남겨주세요 ! </P>
        </details>
        <details>
          <summary> 선발 기준은 무엇인가요? </summary>
          <P> 코딩 실력과는 전혀 무관하게 컴퓨터 분야에 대한 관심도와, 꾸준히 함께 활동하며 성장 할 수 있는 사람인가를 판단하여 선발합니다. 내향적인 성격이라거나 전공 지식이 부족하다고 해서 '절대' 부정적으로 평가하지 않으므로 걱정 말고 지원해주세요! </P>
        </details>
        <details>
          <summary>학회비가 있나요? </summary>
          <P> 학회비가 있습니다! 처음에 학회 들어오시면 학회 기본 운영 비용으로 인당 3만 원 있습니다. 굿즈 제작, 학회방 각종 비품 구매 등의 목적으로 사용될 예정이며, 사용 내역은 투명하게 모든 학회원에게 공개할 예정입니다. </P>
        </details>
        <details>
          <summary>선발 인원이 몇 명인가요? </summary>
          <P> 12~15명 선발 예정입니다.  </P>
        </details>
        <details>
          <summary>학회에 들어가면 다른 동아리 활동이나 대외활동을 병행하기 힘들진 않을까 걱정돼요.</summary>
          <P> 물론 학회원으로서 성실하게 참여해야 하는 활동들이 있지만 실제로 많은 학회원들이 TAB 뿐만 아니라 다른 동아리나 대외활동을 병행하고 있어요! 너무 공사다망하면 학회 참여가 어려울 수 있지만, 학회 활동이 앞으로 여러분의 즐거운 학교생활과 다양한 대외활동에 방해될 정도로 부담이 되지는 결코 않으니 걱정 마세요😊😊  </P>
        </details>
        <details>
          <summary>면접은 어떻게 준비해야하나요? </summary>
          <P> 면접질문은 공통질문과 개인질문으로 나뉩니다. 먼저 공통질문은 일반적인 면접에서 자주 물어보는 질문들로 구성할 예정이며, 개인질문은 본인이 작성한 지원서 내용을 토대로 운영진이 구성한 질문입니다.  </P>
        </details>
        <details>
          <summary>지원서를 길게 적어야하나요? </summary>
          <P> 짧은 것보다는 긴편이 좋겠지만, 너무 내용이 많을 필요까지는 없습니다! 핵심을 잘 풀어서 적은 지원서를 높게 평가할 예정입니다. 다만, 지원서에서도 탈락자가 발생할 수 있으니 최대한 열심히 작성해주세요!!!</P>
        </details>
        
      </div>
      <div>

      </div>
    </div>
  );
}

export default FAQ;
