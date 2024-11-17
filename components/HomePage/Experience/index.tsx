// import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { FaUser } from "react-icons/fa";

const timeline = [
    {
      id: 1,
      content: 'helped her excel in mathematics and improve her overall academic performance through personalized tutoring.',
      target: 'Worked closely with Rani Smita Bharti,',
      href: '#',
      date: '2020 - 2022',
      datetime: '2020-09-20',
      icon: FaUser,
      iconBackground: 'bg-pink-400',
    },
    {
      id: 2,
      content: 'provided guidance in science and social studies, ensuring they grasped key concepts and excelled in their exams.',
      target: 'Collaborated with Abhinav Kumar,',
      href: '#',
      date: '2021 - 2023',
      datetime: '2021-09-22',
      icon: FaUser,
      iconBackground: 'bg-yellow-500',
    },
    {
      id: 3,
      content: 'offered dedicated support in English and history, helping her develop confidence and a better understanding of the subjects.',
      target: 'Mentored Rishu Kumar,',
      href: '#',
      date: '2022 - 2023',
      datetime: '2022-09-28',
      icon: FaUser,
      iconBackground: 'bg-orange-500',
    },
    {
      id: 4,
      content: 'focused on strengthening her problem-solving skills in mathematics and preparing her for competitive exams.',
      target: 'Provided structured lessons to Mauli Kumari,',
      href: '#',
      date: '2023 - 2024',
      datetime: '2023-09-30',
      icon: FaUser,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'helped them with their homework and prepared them for exams by conducting regular practice sessions.',
      target: 'Conducted interactive workshops for Neetika and Nimay,',
      href: '#',
      date: '2023 - 2024',
      datetime: '2023-10-04',
      icon: FaUser,
      iconBackground: 'bg-green-500',
    },
  ];
  

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
// 2020 to 2022-rani Smita bharti
// 2021-2023 abhinav Kumar
// 2022-2023 rishu Kumar
// 2023-2024Mauli Kumari 
// 2023-2024Neetika and nimay
export default function Experience() {
  return (
    <div className="my-12">
    <h1 className="text-5xl sm:text-6xl text-center">My Experience</h1>
    <div className="max-w-xl mx-8 sm:mx-auto my-16 ">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex size-8 items-center justify-center rounded-full ring-8 ring-white',
                    )}
                  >
                    <event.icon aria-hidden="true" className="size-5 text-white" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>{' '}
                      {event.content}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
