import { Container } from "@/components/ui/container"

const about = () => {
  return (
    <Container className="mt-4 min-w-[40vw] min-h-fit border-2 border-grey-500 " style={{ paddingRight: 0, paddingLeft: 0 }}>
      <header className="top-0 z-50 w-full  border-b bg-custom-bg text-white  min-h-[10%]">
        <p className="text-left text-xl font-bold p-2 ml-7 ">About US</p>
      </header>
      <p className="min-w-full min-h-[90%] text-justify  px-8 pt-4 pb-4 text-m ">
        <b>Documentservices.ca</b> is a Canadian private company with experienced agents in the document authentication and legalization industry. Being on the front line of handling document authentication for the Global Affairs and over 150 embassies and consulates for more than a decade, we are keenly aware that the process sometimes can be complicated, time-consuming and stressful for you.
        <br></br>
        <br></br>
        When the Department or embassies receive documents that are incomplete, the process is at risk of facing lengthy waiting times. This often results in the embassy returning your documents unauthenticated. We fix the deficiency before they start seriously effects your dead-lines and the final result. Our specialists assure that all information is presented exactly as required by the authorities and consulates and is in the required format. We also provide certified translation of the documents executed in other than Canadian official languages – French and English. If the need arises we also can assist you with getting travel or business visas to other countries to present the legalized documents there.
      </p>
    </Container>
  )
}

export default about