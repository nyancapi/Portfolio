import Image from "next/image"
import Link from "next/link"
import { Box, Flex, Spacer } from "@chakra-ui/react"

import { TwitterIcon, GithubIcon, YoutubeIcon } from "./socialIcons"
import styles from "./iconWithName.module.css"

export const IconWithName = () => {
  return (
    <Box align="center" p="5">
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/icon.jpg"
            height={150}
            width={150}
            className={styles.borderCircle}
            alt="tomo"
          />
        </a>
      </Link>
      <Flex >
        <Flex justifyContent="space-around" align="center" w="150px">
          <TwitterIcon />
          <GithubIcon />
          <YoutubeIcon />
        </Flex>
        <Spacer />
        <Box>
        <p className={styles.name}>tomo</p>
        </Box>
        <Spacer />
        <Box w="150px"></Box>
      </Flex>
    </Box>
  )
}