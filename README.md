# react-dashboard-builder

Implement this react code:

import * as React from "react";

function MyComponent() {
  return (
    <div className="py-5 pr-5 pl-20 bg-stone-950 rounded-[30px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-11 text-2xl font-semibold leading-9 text-white whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.99] w-[86px]"
            />
            <div className="mt-7 text-3xl leading-9">Samantha</div>
            <div className="mt-5 text-lg leading-7">samantha@email.com</div>
            <div className="mt-32 max-md:mt-10">Dashboard</div>
            <div className="mt-12 max-md:mt-10">Expenses</div>
            <div className="mt-10">Wallets</div>
            <div className="mt-12 max-md:mt-10">Summary</div>
            <div className="mt-10 max-md:mt-10">Accounts</div>
            <div className="mt-11 max-md:mt-10">Settings</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
          <div className="grow pl-20 w-full bg-white rounded-[30px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col">
                      <div className="text-4xl font-semibold tracking-wider text-slate-800">
                        Expenses
                      </div>
                      <div className="mt-4 text-base tracking-wide text-stone-950">
                        01 - 25 March, 2020
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 self-start max-w-full aspect-[4] w-[123px]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                    className="self-center mt-12 aspect-[8.33] w-[510px] max-md:mt-10 max-md:max-w-full"
                  />
                  <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                          <div className="text-lg tracking-wide leading-8 text-slate-800">
                            Today
                          </div>
                          <div className="flex gap-4 mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-2">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Grocery
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Belanja di pasar
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Transportation
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Naik bus umum
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Housing
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Bayar Listrik
                              </div>
                            </div>
                          </div>
                          <div className="mt-16 text-lg tracking-wide leading-8 text-slate-800 max-md:mt-10">
                            Monday, 23 March 2020
                          </div>
                          <div className="flex gap-4 mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Food and Drink
                              </div>
                              <div className="mt-4 text-sm tracking-wide text-gray-700">
                                5:12 pm • Makan Steak
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Entertainment
                              </div>
                              <div className="mt-3.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Nonton Bioskop
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-1.5 text-base font-semibold tracking-wide text-right whitespace-nowrap text-slate-800 max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            className="self-end aspect-[5] w-[25px]"
                          />
                          <div className="mt-14 max-md:mt-10">-326.800</div>
                          <div className="self-start mt-16 ml-3.5 max-md:mt-10 max-md:ml-2.5">
                            -15.000
                          </div>
                          <div className="mt-16 max-md:mt-10">-185.750</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            className="self-end mt-24 aspect-[5] w-[25px] max-md:mt-10"
                          />
                          <div className="mt-14 max-md:mt-10">-156.000</div>
                          <div className="self-start mt-16 ml-3 max-md:mt-10 max-md:ml-2.5">
                            -35.200
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-12 py-20 mx-auto w-full rounded-none bg-slate-50 max-md:px-5 max-md:mt-10">
                  <div className="text-xl tracking-wide leading-8 text-slate-800">
                    Where your money go?
                  </div>
                  <div className="flex gap-5 mt-10 text-sm tracking-wide leading-6 text-slate-800 max-md:mt-10">
                    <div className="flex-auto font-medium">Food and Drinks</div>
                    <div className="text-right">872.400</div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Shopping</div>
                    <div className="text-right">1.378.200</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Housing</div>
                    <div className="text-right">928.500</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="flex-auto font-medium">Transportation</div>
                    <div className="text-right">420.700</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Vehicle</div>
                    <div className="text-right">520.000</div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



GPT Engineer

Done
Implemented MyComponent as specified.
Preview





The React component "MyComponent" has been implemented as specified. Please check it out and let me know if there are any further changes or additions you would like to make.

Kristian Ruiz Kyvik

Heres some code for a dashboard. Can you implement it please:

mport * as React from "react";

function MyComponent() {
  return (
    <div className="py-5 pr-5 pl-20 bg-stone-950 rounded-[30px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-11 text-2xl font-semibold leading-9 text-white whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.99] w-[86px]"
            />
            <div className="mt-7 text-3xl leading-9">Samantha</div>
            <div className="mt-5 text-lg leading-7">samantha@email.com</div>
            <div className="mt-32 max-md:mt-10">Dashboard</div>
            <div className="mt-12 max-md:mt-10">Expenses</div>
            <div className="mt-10">Wallets</div>
            <div className="mt-12 max-md:mt-10">Summary</div>
            <div className="mt-10 max-md:mt-10">Accounts</div>
            <div className="mt-11 max-md:mt-10">Settings</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
          <div className="grow pl-20 w-full bg-white rounded-[30px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col">
                      <div className="text-4xl font-semibold tracking-wider text-slate-800">
                        Expenses
                      </div>
                      <div className="mt-4 text-base tracking-wide text-stone-950">
                        01 - 25 March, 2020
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 self-start max-w-full aspect-[4] w-[123px]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                    className="self-center mt-12 aspect-[8.33] w-[510px] max-md:mt-10 max-md:max-w-full"
                  />
                  <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                          <div className="text-lg tracking-wide leading-8 text-slate-800">
                            Today
                          </div>
                          <div className="flex gap-4 mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-2">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Grocery
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Belanja di pasar
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Transportation
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Naik bus umum
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Housing
                              </div>
                              <div className="mt-2.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Bayar Listrik
                              </div>
                            </div>
                          </div>
                          <div className="mt-16 text-lg tracking-wide leading-8 text-slate-800 max-md:mt-10">
                            Monday, 23 March 2020
                          </div>
                          <div className="flex gap-4 mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Food and Drink
                              </div>
                              <div className="mt-4 text-sm tracking-wide text-gray-700">
                                5:12 pm • Makan Steak
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?"
                              className="shrink-0 w-12 aspect-square"
                            />
                            <div className="flex flex-col self-start mt-1.5">
                              <div className="text-base font-medium tracking-wide text-slate-800">
                                Entertainment
                              </div>
                              <div className="mt-3.5 text-sm tracking-wide text-gray-700">
                                5:12 pm • Nonton Bioskop
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-1.5 text-base font-semibold tracking-wide text-right whitespace-nowrap text-slate-800 max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            className="self-end aspect-[5] w-[25px]"
                          />
                          <div className="mt-14 max-md:mt-10">-326.800</div>
                          <div className="self-start mt-16 ml-3.5 max-md:mt-10 max-md:ml-2.5">
                            -15.000
                          </div>
                          <div className="mt-16 max-md:mt-10">-185.750</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            className="self-end mt-24 aspect-[5] w-[25px] max-md:mt-10"
                          />
                          <div className="mt-14 max-md:mt-10">-156.000</div>
                          <div className="self-start mt-16 ml-3 max-md:mt-10 max-md:ml-2.5">
                            -35.200
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-12 py-20 mx-auto w-full rounded-none bg-slate-50 max-md:px-5 max-md:mt-10">
                  <div className="text-xl tracking-wide leading-8 text-slate-800">
                    Where your money go?
                  </div>
                  <div className="flex gap-5 mt-10 text-sm tracking-wide leading-6 text-slate-800 max-md:mt-10">
                    <div className="flex-auto font-medium">Food and Drinks</div>
                    <div className="text-right">872.400</div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Shopping</div>
                    <div className="text-right">1.378.200</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Housing</div>
                    <div className="text-right">928.500</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="flex-auto font-medium">Transportation</div>
                    <div className="text-right">420.700</div>
                  </div>
                  <div className="flex flex-col justify-center mt-3 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                  <div className="flex gap-5 justify-between mt-9 text-sm tracking-wide leading-6 whitespace-nowrap text-slate-800">
                    <div className="font-medium">Vehicle</div>
                    <div className="text-right">520.000</div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-md">
                    <div className="shrink-0 bg-emerald-400 rounded-md h-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/react-dashboard-builder.git
cd react-dashboard-builder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
