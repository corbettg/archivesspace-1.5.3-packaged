#--
# Copyright (c) 2011-2012 David Kellum
#
# Licensed under the Apache License, Version 2.0 (the "License"); you
# may not use this file except in compliance with the License.  You
# may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
# implied.  See the License for the specific language governing
# permissions and limitations under the License.
#++

require 'rjack-jackson/base'

require 'java'

# Jackson JSON parser module
#
# http://jackson.codehaus.org/
#
module RJack
  module Jackson
    require "#{LIB_DIR}/jackson-core-asl-#{JACKSON_VERSION}.jar"
    require "#{LIB_DIR}/jackson-mapper-asl-#{JACKSON_VERSION}.jar"
  end
end
