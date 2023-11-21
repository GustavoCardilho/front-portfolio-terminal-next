"use client";

import { HomeIcon, MoveRight, Plus, X, CornerDownRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import Logo from "../assets/logosemfundobranca.png";

type TypeContentSystem =
  | "opening"
  | "terminal"
  | "settings"
  | "about"
  | "null"
  | "input"
  | "test"
  | "newpage"
  | "social"
  | "help";

interface ITerminalSystem {
  page: number;
  content: [
    {
      type: TypeContentSystem;
      text?: string;
      command?: string;
    }
  ];
}

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [terminal, setTerminal] = useState<ITerminalSystem[]>([
    {
      page: 1,
      content: [{ type: "opening" }],
    },
    {
      page: 2,
      content: [{ type: "newpage" }],
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [pagesActivies, setPagesActivies] = useState<number[]>([1, 2]);
  const [pagesCreated, setPagesCreated] = useState<number[]>([1, 2]);
  const handleType = (type: TypeContentSystem) => {
    if (type == "opening") {
      return (
        <div className="text-white font-kanit">
          <p>{"> "} Seja bem vindo ao portolio versão terminal!!</p>
          <p>{"> "} Espero que você goste do projeto!!</p>
          <p>
            {"> "} Utilize o comando &quot;
            <span className="text-red-600">help</span>&quot; para mais
            informações
          </p>
        </div>
      );
    }

    if (type == "help") {
      return (
        <div className="text-white font-kanit w-full">
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">page --create</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Cria uma nova pagina</p>
          </div>
          <br></br>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">page --delete -y</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Deleta a pagina atual</p>
          </div>
          <br></br>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">page --delete [page]</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Deleta a pagina selecionada</p>
          </div>
          <br></br>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">move [page]</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Troca para a pagina selecionada</p>
          </div>
          <br></br>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">clear / cls</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Limpa a pagina selecionada</p>
          </div>
          <br></br>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">help</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Exibi todos os comandos disponiveis</p>
          </div>
          <br></br>

          <p className="my-4 text-zinc-800">-------------------------</p>

          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <MoveRight size={15} />
            <p className="text-yellow-500">social</p>
          </div>
          <div className="w-full gap-2 flex flex-row flex-nowrap items-center">
            <CornerDownRight size={15} className="ml-8" />
            <p>Exibi todas as redes sociais</p>
          </div>
          <br></br>
        </div>
      );
    }

    if (type == "test") {
      return (
        <div className="text-white font-kanit">
          <p>{"> "} Teste concluido!!</p>
        </div>
      );
    }

    if (type == "social") {
      return (
        <div className="w-full flex flex-col gap-2 font-kanit text-white">
          <div className="w-full flex flex-row gap-2 items-center">
          <ExternalLink size={15} className="font-bold"/>
          <a
            href="https://www.linkedin.com/in/gustavo-rafael-cardilho-24b984248/"
            target="_blank"
            className="text-yellow-500 underline cursor-pointer"
          >
            Linkedin
          </a>
          </div>

          <div className="w-full flex flex-row gap-2 items-center">
          <ExternalLink size={15} className="font-bold"/>
          <a
            href="https://github.com/Kyoudan"
            target="_blank"
            className="text-yellow-500 underline cursor-pointer"
          >
            Github
          </a>
          </div>

          <div className="w-full flex flex-row gap-2 items-center">
          <ExternalLink size={15} className="font-bold"/>
          <a
            href="https://www.instagram.com/guuh_raff/"
            target="_blank"
            className="text-yellow-500 underline cursor-pointer"
          >
            Instagram
          </a>
          </div>

          
    
        </div>
      );
    }

    return <></>;
  };

  const handleInput = (inputParam: string) => {
    if (inputParam.length >= 1) inputParam = inputParam.slice(0, -1);

    inputParam = inputParam.toLowerCase();

    const findPage = terminal.find((system) => system.page == page);
    if (!findPage) return;

    if (inputParam == "") {
      sendCommand("input", "command not found", input);
      return;
    }

    if (inputParam == "teste") {
      sendCommand("input", "Teste foi executado com sucesso!!", inputParam);
      return;
    }

    if (inputParam && inputParam.startsWith("page")) {
      CommandPage(inputParam);
      return;
    }

    if (inputParam && inputParam.startsWith("move")) {
      CommandMove(inputParam);
      return;
    }

    if (inputParam == "help") {
      sendCommand("input", "Comandos disponiveis:", inputParam);
      sendCommand("help", undefined, inputParam);

      return;
    }

    if (inputParam == "social") {
      sendCommand("input", "Redes sociais:", inputParam);
      sendCommand("social", undefined, inputParam);

      return;
    }

    if (inputParam == "ping") {
      sendCommand("input", "pong!!", inputParam);
      return;
    }

    if (inputParam == "clear" || inputParam == "cls") {
      const findPage = terminal.find((system) => system.page == page);
      if (!findPage) return;
      findPage.content = [{ type: "newpage" }];
      setTerminal((prevState) => {
        const index = prevState.findIndex((system) => system.page == page);
        prevState[index] = findPage;
        return [...prevState];
      });

      setInput("");

      return;
    }

    sendCommand("input", "command not found", inputParam);
    return;
  };

  const changePage = (pageParam: number) => {
    setPage(pageParam);
  };

  const deletePage = (pageParam: number) => {
    if (pagesActivies.length == 1) return;
    const findPage = terminal.find((system) => system.page == pageParam);
    if (!findPage) return;

    const newPagesActvies = pagesActivies.filter(
      (pageFind) => pageFind != pageParam
    );

    const newTerminal = terminal.filter((system) => system.page != pageParam);
    if (pageParam == page) {
      changePage(newPagesActvies[newPagesActvies.length - 1]);
    }

    setPagesActivies([...newPagesActvies]);
    setTerminal([...newTerminal]);
  };

  const createPage = () => {
    const findPage = terminal.find((system) => system.page == page);
    if (!findPage) return;

    const newPage: ITerminalSystem = {
      page: pagesCreated[pagesCreated.length - 1] + 1,
      content: [{ type: "newpage" }],
    };

    setTerminal([...terminal, newPage]);
    setPagesActivies([...pagesActivies, newPage.page]);
    setPagesCreated([...pagesCreated, newPage.page]);
  };

  const CommandPage = (input: string) => {
    if (input == "page") {
      sendCommand("input", "params invalids", input);
      return;
    }

    if (input && input.startsWith("page") && input.length > 4) {
      try {
        const toDivideCommand = input.split(" ");

        if (toDivideCommand[1] == "") throw new Error("params invalids");
        if (toDivideCommand[1] == "--create") {
          createPage();
          changePage(pagesCreated[pagesCreated.length - 1] + 1);
        }
        if (toDivideCommand[1] == "--delete") {
          if (toDivideCommand.length < 3) throw new Error("params invalids");
          if (toDivideCommand[2] == "-y") {
            sendCommand(
              "input",
              `Pagina ${page} deletada com sucesso!!`,
              input
            );
            deletePage(page);
            return;
          }
          const pageDelete = parseInt(toDivideCommand[2]);
          sendCommand(
            "input",
            `Pagina ${pageDelete} deletada com sucesso!!`,
            input
          );
          deletePage(pageDelete);
          return;
        }
      } catch (err) {
        sendCommand("input", "params invalids", input);
        return;
      }
    }
    sendCommand("input", "command not found", input);

    return;
  };

  const CommandMove = (input: string) => {
    if (input == "move") {
      sendCommand("input", "params invalids", input);
      return;
    }

    if (input && input.startsWith("move") && input.length > 4) {
      try {
        const toDivideCommand = input.split(" ");

        if (toDivideCommand[1] == "") throw new Error("params invalids");
        changePage(parseInt(toDivideCommand[1]));
      } catch (err) {
        sendCommand("input", "params invalids", input);
        return;
      }
    }
    sendCommand("input", "command not found", input);

    return;
  };

  const sendCommand = (
    type: TypeContentSystem,
    text: string | undefined,
    command: string
  ) => {
    const findPage = terminal.find((system) => system.page == page);
    if (!findPage) return;
    const Text = text ? text : undefined;
    findPage.content.push({
      type,
      text: Text,
      command,
    });
    setTerminal((prevState) => {
      const index = prevState.findIndex((system) => system.page == page);
      prevState[index] = findPage;
      return [...prevState];
    });
    setInput("");
  };

  useEffect(() => {
    console.log(terminal);
  }, [terminal]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <main className="bg-zinc-950 w-full min-h-screen flex items-center justify-center">
      <section className="lg:w-[1000px] w-full bg-zinc-800 lg:h-[75vh] h-[90vh] rounded-lg mx-2 flex flex-col">
        <div className="w-full px-2 pt-2 gap-1 flex justify-between">
          <div className="w-full flex flex-row gap-1 items-end justify-start">
            {pagesActivies &&
              pagesActivies.map((pag) => (
                <div
                  className={`w-full max-w-[250px] flex flex-row gap-2 p-2 rounded-lg justify-between  ${
                    pag == page
                      ? "bg-zinc-950"
                      : "hover:bg-zinc-900 transition-all cursor-pointer"
                  }`}
                  onClick={() => {
                    if (pag == page) return;
                    changePage(pag);
                  }}
                  key={`page-${pag}`}
                >
                  <div className="w-full flex flex-row gap-2 items-center flex-wrap">
                    <Image
                      alt="Logo"
                      src={Logo}
                      className="w-[15px] h-[15px]"
                    />{" "}
                    <span className="text-zinc-100 font-bold text-base">
                      Page {pag}
                    </span>
                  </div>
                  <div className="w-auto flex items-center justify-center">
                    <button
                      className="p-1 hover:bg-zinc-800 rounded-lg transition-all"
                      onClick={() => {
                        deletePage(pag);
                      }}
                    >
                      <X className="text-zinc-100" size={15} />
                    </button>
                  </div>
                </div>
              ))}

            <div className="w-auto h-full flex items-center justify-center">
              <button
                className=" text-zinc-200 rounded-lg hover:bg-zinc-900 transition-all p-1"
                onClick={() => createPage()}
              >
                <Plus size={15} />
              </button>
            </div>
          </div>
          <div className="w-auto h-full flex items-center justify-center">
            <button className="p-2 hover:bg-zinc-900 rounded-lg transition-all">
              <X className="text-zinc-100" size={15} />
            </button>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <section className="w-[99.5%] bg-zinc-950 h-[99.5%] rounded-lg pb-2 mb-1 overf-low-x-hidden overflow-y-hidden hover:overflow-y-scroll transition-all teste p-2">
            {terminal && (
              <>
                {terminal.map((system) => (
                  <Fragment key={system.page}>
                    {system.page == page &&
                      system.content.map((content, index) => (
                        <Fragment key={`content-type-${index}`}>
                          {content.type && (
                            <Fragment> {handleType(content.type)}</Fragment>
                          )}
                          <div className="w-full flex flex-col text-white font-kanit relative">
                            <div className="w-full">
                              {index != system.content.length &&
                                content.text &&
                                content.type == "input" && (
                                  <>
                                    {" "}
                                    <div className="w-auto flex flex-row gap-2">
                                      <p className="text-green-600">
                                        guest@gustavocardilho
                                      </p>
                                      <p className="text-purple-600">MINGW64</p>
                                      <p className="text-orange-600">/</p>
                                    </div>
                                    <div className="bg-transparent outline-none w-full border-none resize-none">
                                      <p>$ {content.command}</p>
                                      <p>{content.text}</p>
                                    </div>
                                  </>
                                )}
                            </div>
                          </div>
                        </Fragment>
                      ))}
                  </Fragment>
                ))}
                <div className="w-full text-white font-kanit">
                  <div className="w-auto flex flex-row gap-2">
                    <p className="text-green-600">guest@gustavocardilho</p>
                    <p className="text-purple-600">MINGW64</p>
                    <p className="text-orange-600">/</p>
                  </div>
                  <textarea
                    className="bg-transparent outline-none w-full border-none resize-none h-[400px]"
                    value={`$ ${input}`}
                    onKeyUp={(e) => {
                      let value = input;

                      if (value[0] == "$") {
                        value = value.replace("$", "");
                      }
                      if (e.key == "Enter") {
                        if (input.length == 1) {
                          console.log("input", input.length);
                          return setInput("");
                        }
                        handleInput(value);
                      }

                      if (value[0] == " ") {
                        value = value.replace(" ", "");
                      }
                    }}
                    onChange={(e) => {
                      let value;

                      if (e.target.value.length == 0) return;
                      if (e.target.value[0] == "$") {
                        value = e.target.value.replace("$", "");
                      } else {
                        value = e.target.value;
                      }

                      if (value[0] == " ") {
                        value = value.replace(" ", "");
                      }

                      setInput(value);
                    }}
                  ></textarea>
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
