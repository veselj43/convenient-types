import { AllowEnumStringValues, OmitStrict, OmitTyped } from '.'

type TagStrict = 'problematic' | 'kind'
type TagTyped = TagStrict | AllowEnumStringValues

interface TestSubject {
  id: string
  version: number
  createdAt: string
  tagStrict: TagStrict
  tagTyped: TagTyped
}

const subject1: TestSubject = {
  id: '001',
  version: 1,
  createdAt: '2024-11-19T15:34:24Z',
  tagStrict: 'kind',
  tagTyped: 'moody', // ok, but still suggests known values
}

type T1 = OmitTyped<TestSubject, 'version' | 'updatedAt'> // ok { id: string; createdAt: string; }

type T2 = OmitStrict<TestSubject, 'version' | 'updatedAt'> // error: Type '"updatedAt"' is not assignable to type 'keyof TestSubject'
